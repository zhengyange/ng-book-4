import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './store/app.store';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(AppStore) private store: Store<AppState>) {
  }
}







