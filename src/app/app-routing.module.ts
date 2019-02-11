import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';
import { JoinGameComponent } from './join-game/join-game.component';

const routes: Routes = [
	{ path: '', component: GamesComponent },	
	{ path: 'newGame', component: NewGameComponent },
	{ path: 'joinGame', component: JoinGameComponent },
	{ path: 'game', component: GameComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }


