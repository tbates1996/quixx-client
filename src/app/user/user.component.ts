import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service'
import { Client } from '../shared/models/client.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	
	@Input() user: Client;

	constructor(private socket: SocketService) {}

  ngOnInit() {
	}

}
