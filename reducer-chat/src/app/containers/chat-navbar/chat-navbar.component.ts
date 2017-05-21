import { Component, OnInit, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../../store/app.store';
import { AppState, getUnreadMessagesCount } from '../../store/app.reducer';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.css']
})
export class ChatNavbarComponent implements OnInit {
	unreadMessagesCount: number;
  constructor(@Inject(AppStore) private store: Store<AppState>) {
  	store.subscribe(() => this.updateState())
  }

  ngOnInit() {
  }

  updateState(): void {
  	this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
    
  }
}
