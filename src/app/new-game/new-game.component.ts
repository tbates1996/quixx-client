import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {Router} from "@angular/router"
import { UserService } from '../user/user.service';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
	
	gamename: string;
	username: string;

	constructor(private router: Router, private http: HttpClient,private userService: UserService,
	            private gameService: GameService ) { }

  ngOnInit() {
  }

	createNewGame(){
		console.log(this.gamename);
		console.log(this.username);
		this.http.post(`${environment.serverUrl}/createGame`,{ 'name': this.gamename})
		.subscribe(
				data => {
					console.log("POST Request is successful ", data);
					this.userService.setUsername(this.username);
					this.gameService.gid =<string>data;
					this.router.navigate(['/game']);
				},
				error => {
						console.log("Error", error);
				}
    );          
	}
}
