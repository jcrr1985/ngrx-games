import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interface/app.interface';
import { Category } from 'src/app/interface/category.interface';
import { selectCategory } from 'src/app/ngrx/game.action';
import { loaderON } from 'src/app/ngrx/loader.actions';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  categories: Category[] = [];
  categorySelected!: Category;

  constructor(private store: Store<{ appState: AppState }>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.categories = state.appState.categories;
      this.categorySelected = state.appState.categorySelected;
    })
  }

  setCategory(categorySelected: Category) {
    this.store.dispatch(selectCategory({ categorySelected }));
  }


}
