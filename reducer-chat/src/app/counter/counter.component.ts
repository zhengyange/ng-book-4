import { Component, OnInit, Inject, OpaqueToken } from '@angular/core';

import { createStore, Store, StoreEnhancer } from 'redux';
import { AppState } from './counter-state';
import { counterReducer } from './counter-reducer';
import * as CounterActions from './counter-action-creators';

// let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

export const counterStore: Store<AppState> = createStore<AppState>(
	counterReducer,
	// devtools
); 

export const CStore = new OpaqueToken('Counter.store')

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
	counter: number;

  constructor(@Inject(CStore) private store: Store<AppState>) { 
  	store.subscribe(() => this.readState());
  	this.readState();
  }

  ngOnInit() {
  }

  readState(): void {
  	let state: AppState = this.store.getState();
  	this.counter = state.counter;
  }

  increment(): void {
  	this.store.dispatch(CounterActions.increment());
  }

  decrement(): void {
  	this.store.dispatch(CounterActions.decrement());
  }

}
