import { Client } from './client.model';
import { Die } from './die.model';

export class Game {
  name: string;
	started: boolean;
	finished: boolean;
	clients: Client[]
	die: Die
}
