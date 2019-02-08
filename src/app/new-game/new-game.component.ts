import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {Router} from "@angular/router"

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
	
	gamename: string;
	username: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

		/*options = new RequestOptions({
		method: RequestMethod.Post,
		headers: {
			'Content-type' : 'application/json'
		}
	});	

  */
	createNewGame(){
		console.log(this.gamename);
		console.log(this.username);
		this.http.post(`${environment.serverUrl}/createGame`,{ 'name': this.gamename})
		.subscribe(
            data => {
              console.log("POST Request is successful ", data);
							this.router.navigate(['/game',data]);
						},
            error => {
                console.log("Error", error);
            }
    );          
	}
}
