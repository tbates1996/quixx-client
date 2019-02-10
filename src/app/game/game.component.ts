import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../socket.service'
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs';
import { GameService } from './game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	id: string;
	private sub: any;
	row: number;
	col: number;

	constructor(private route: ActivatedRoute,private socket : SocketService, private userService: UserService,
	            private gameService: GameService, private router: Router) { }

	private sock_sub: Subscription;
	ngOnInit() {
		window.addEventListener("beforeunload", function (e) {
			var confirmationMessage = "\o/";
			console.log("cond");
			e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
			return confirmationMessage;              // Gecko, WebKit, Chrome <34
		});
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
		});

		this.socket.init(this.gameService.gid);
		this.sock_sub = this.socket.getEventListener().subscribe(event => {
        if(event.type == "message") {
            let data = event.data;
						if(data.type == "waiting"){
							this.gameService.game = data.msg;
						}
						else if(data.type == "playing"){
						
						}
						else if(data.type == "finished"){
						
						}
				} 
        if(event.type == "close") {
            this.users.push("/The socket connection has been closed");
        }
        if(event.type == "open") {
					console.log("Sending join for  (" + this.id + "): " + this.userService.username);
					this.socket.send(JSON.stringify({'type': 'join', 'msg': {'username': this.userService.username } }));
        }
    });
  }

	public getReady() { 
		this.socket.send(JSON.stringify({'type': 'ready'}));
	}

	public rollDie() {
		this.socket.send(JSON.stringify({'type':'roll'}));
	}

  ngOnDestroy() {
		console.log("Destroyed");
    this.sub.unsubscribe();
		this.sock_sub.unsubscribe();
		this.socket.close();
  }
}
