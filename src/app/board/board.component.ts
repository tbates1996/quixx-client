import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service';
import { GameService } from '../game/game.service';
import { Board } from '../shared/models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	@Input() board: Board;

  constructor(private socket: SocketService, public gameService: GameService) { }

  ngOnInit() {
		console.log(this.board);
  }
  
	public sendAction(row: number, col: number){
		this.socket.send(JSON.stringify({'type': 'action', 'msg': {'row': row, 'col':col}}));
	}

}
