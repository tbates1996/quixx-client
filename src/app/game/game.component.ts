import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../socket.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	id: string;
	private sub: any;
	public users : string[];

  constructor(private route: ActivatedRoute,private socket : SocketService) { }

	ngOnInit() {
		this.users = []
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });

		this.socket.getEventListener().subscribe(event => {
        if(event.type == "message") {
            let data = event.data;
            this.users.push(data);
        }
        if(event.type == "close") {
            this.users.push("/The socket connection has been closed");
        }
        if(event.type == "open") {
            this.users.push("/The socket connection has been established");
        }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
		this.socket.close();
  }
}
