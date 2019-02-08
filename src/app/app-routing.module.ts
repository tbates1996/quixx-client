import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';
const routes: Routes = [
	{ path: '', redirectTo: '/lobby', pathMatch: 'full' },	
	{ path: 'newGame', component: NewGameComponent },
	{ path: 'lobby', component: GamesComponent },
	{ path: 'game/:id', component: GameComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }


