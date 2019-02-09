import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewGameComponent } from './new-game/new-game.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { UserComponent } from './user/user.component';
import { JoinGameComponent } from './join-game/join-game.component';

@NgModule({
  declarations: [
    AppComponent,
		GamesComponent,
		NewGameComponent,
		GameComponent,
		UserComponent,
		JoinGameComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
