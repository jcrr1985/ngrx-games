import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interface/app.interface';
import { Game } from 'src/app/interface/game.interface';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input() image_url = '';
  @Input() data: Game = {
    id: '',
    categories: [],
    name: '',
    image: '',
  };
  jackpot = 0;
  newInCategory = false;
  constructor(private store: Store<{ appState: AppState }>) { }

  ngOnInit(): void {
    this.image_url = this.data.image;
    this.store.subscribe(state => {
      const found = state.appState.jackpots.find(jackpot => jackpot.game == this.data.id);
      if (found) this.jackpot = found.amount
      this.newInCategory = this.data.categories.includes('new') && state.appState.categorySelected.name != 'New Games';
    })

  }


}
