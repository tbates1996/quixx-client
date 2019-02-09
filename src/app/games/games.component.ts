import { Component, OnInit } from '@angular/core';
import { GamesService } from './game.service';
import { GameService } from '../game/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

	public games: any[];

  constructor(private router: Router, private gs: GamesService, private gameService: GameService) { }

  ngOnInit() {
		this.gs.getGames().subscribe((res: any[]) => {
			this.games = res;
			console.log(res);
		});
  }

	public joinGame(id: string){
		this.gameService.gid = id;
		this.router.navigate(['/joinGame']);
	}
}
