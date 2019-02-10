import { Board } from './board.model';

export class Client{
	username: string;
	ready: boolean;
	currentTurn: boolean;
	score: number;
	board: Board;
}
