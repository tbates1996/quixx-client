import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	constructor(private socket: SocketService) {}

  ngOnInit() {
	}

}
