import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	public username: string;
  constructor() { }
	
  public setUsername(username: string) {
		this.username = username;
	}
}
