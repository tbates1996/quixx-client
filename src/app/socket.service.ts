import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

	private socket: WebSocket;
	private listener: EventEmitter<any> = new EventEmitter();
  private gid: string;

	constructor() { 
				
	}

	public init(id: string){
		this.socket = new WebSocket(environment.serverUrl + "?gid=" + id);
		this.socket.onopen = event => {
				this.listener.emit({"type": "open", "data": event});
		}
		this.socket.onclose = event => {
				console.log("Closed");
				this.listener.emit({"type": "close", "data": event});
		}
		this.socket.onmessage = event => {
				let data = JSON.parse(event.data)
				console.log(data);
				this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
		}
	}

	public send(data: string) {
		this.socket.send(data);
	}

	public close() {
		this.socket.close();
	}

	public getEventListener() {
		return this.listener;
	}
}
