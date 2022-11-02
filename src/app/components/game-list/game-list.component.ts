import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from 'src/app/interface/game.interface';

// NGRX

import { Store } from '@ngrx/store';
import * as actions from '../../ngrx/game.action';
import * as loaderActions from '../../ngrx/loader.actions';
import { AppState } from 'src/app/interface/app.interface';
import { firstValueFrom, interval, Observable, Subscription, timer } from 'rxjs';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {

  gamesDisplay: Game[];
  timerObservable!: Subscription;
  constructor(private store: Store<{ appState: AppState }>) {
    this.gamesDisplay = [];
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.gamesDisplay = state.appState.gameList
    })
    this.loadData()
    this.intervalJackpots()
  }

  ngOnDestroy(): void {
    this.timerObservable.unsubscribe();
  }

  loadData() {
    this.store.dispatch(actions.loadGames());
  }

  async intervalJackpots() {
    await firstValueFrom(timer(3000));
    this.timerObservable = interval(3000).subscribe(e => {
      this.store.dispatch(actions.loadJackpots());
    });
  }


}
