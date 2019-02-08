import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

interface GameResponse {
	Key: string;
	Value: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
	games: any[];
	
	constructor(private http: HttpClient) {
		this.games = [];
	}

	getGames(){ 
		return this.http.get(`${environment.serverUrl}`)
	}	
}
