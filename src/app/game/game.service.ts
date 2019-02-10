import { Injectable } from '@angular/core';
import { Game } from '../shared/model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public game: Game;	
	public gid: string;
  
  constructor() { }
}
