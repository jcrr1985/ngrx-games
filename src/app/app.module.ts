import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

// NGRX
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { gameReducer } from './ngrx/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './ngrx/game.effects';
import { LoadComponent } from './components/load/load.component';
import { loaderReducer } from './ngrx/loader.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GameItemComponent,
    GameListComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: gameReducer, loader: loaderReducer }),
    AppRoutingModule,
    EffectsModule.forRoot([GameEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
