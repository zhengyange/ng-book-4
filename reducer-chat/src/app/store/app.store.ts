import { InjectionToken } from '@angular/core';
import { createStore, Store, compose, StoreEnhancer } from 'redux';
import { AppState, rootReducer } from './app.reducer';

export const AppStore = new InjectionToken('App.store');
// const devtools: StoreEnhancer<AppState> =
//   window['devToolsExtension'] ?
  // window['devToolsExtension']() : f => f;

// export function createAppStore(): Store<AppState> {
//   return createStore<AppState>(
//     rootReducer,
//     // compose(devtools)
//   );
// }

export const store: Store<AppState> = createStore<AppState>(rootReducer)

export const appStoreProviders = [
   { provide: AppStore, useValue: store }
];