import { Component, OnInit, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../../store/app.store';
import { AppState, getAllThreads, getCurrentThread } from '../../store/app.reducer';
import { Thread } from '../../thread/thread.model';
import * as ThreadActions from '../../thread/thread.action';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {
	threads: Thread[];
	currentThreadId: string;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
  	store.subscribe(() => this.updateState());
  	this.updateState();
  }

  ngOnInit() {
  }

  updateState(): void {
  	let state = this.store.getState();
  	this.threads = getAllThreads(state);
  	let currentThread = getCurrentThread(state)
  	this.currentThreadId = currentThread && currentThread.id;
  }

  handleThreadClicked(thread: Thread): void {
  	this.store.dispatch(ThreadActions.selectThread(thread));
  }
}
