import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from '../thread/threads.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	unreadMessagesCount: number;

  constructor(private messagesService: MessagesService,
  						private threadsService: ThreadsService) { }

  ngOnInit(): void {
  	this.messagesService.messages
  		.combineLatest(this.threadsService.currentThread, 
  			(messages: Message[], currentThread: Thread) => [currentThread, messages])
  		.subscribe(([currentThread, messages]: [Thread, Message[]]) => {
  			this.unreadMessagesCount = 
  			_.reduce(
  					messages,
  					(sum: number, m: Message) => {
  						let messageIsInCurrentThread: boolean = m.thread && currentThread && (currentThread.id === m.thread.id); 
  						if (m && !m.isRead && !messageIsInCurrentThread) {
								sum = sum + 1; 
							} return sum;
  					},
  				0)
  		})
  }

}
