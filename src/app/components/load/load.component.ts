import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  showLoader: boolean = true;
  constructor(private store: Store<{ loader: boolean }>) { }

  ngOnInit(): void {
    this.store.subscribe(state => this.showLoader = state.loader)
  }

}
