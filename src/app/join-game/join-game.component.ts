import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css'],
})
export class JoinGameComponent implements OnInit {
  public username: string;

  constructor(
    private router: Router,
    private gameService: GameService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  public joinGame() {
    this.userService.username = this.username;
    this.router.navigate(['/game']);
  }
}
