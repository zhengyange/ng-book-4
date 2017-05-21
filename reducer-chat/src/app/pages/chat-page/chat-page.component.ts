import { Component, OnInit, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../../store/app.store';
import { AppState } from '../../store/app.reducer';
import { ChatExampleData } from '../../data/chat-example-data';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(@Inject(AppStore) private store: Store<AppState>) { 
  }

  ngOnInit() {
  	ChatExampleData(this.store);
  }

}
