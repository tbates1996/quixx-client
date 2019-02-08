import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

	public games: any[];

  constructor(private gs: GameService) { }

  ngOnInit() {
		this.gs.getGames().subscribe((res: any[]) => {
			this.games = res;
			console.log(res);
		});
  }

}
