import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
import { User } from '../user/user.model';
import { ThreadsService } from '../thread/threads.service';
import { MessagesService } from '../message/messages.service';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-chat-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
	messages: Observable<any>;
	currentThread: Thread;
	draftMessage: Message;
	currentUser: User;

  constructor(private messagesService: MessagesService,
  						private threadsService: ThreadsService,
  						private usersService: UsersService,
  						private el: ElementRef) { }

  ngOnInit() {
  	this.messages = this.threadsService.currentThreadMessages;
  	this.draftMessage = new Message();
  	this.threadsService.currentThread
  		.subscribe((thread: Thread) => {
  			this.currentThread = thread;
  		});

  	this.usersService.currentUser
  		.subscribe((user: User) => {
  			this.currentUser = user;
  		})

  	this.messages
  		.subscribe((messages: Message[]) => {
  			setTimeout(() => {
  				this.scrollToBottom();
  			}, 0);
  		})
  }

  sendMessage(): void {
  	let m: Message = this.draftMessage;
  	m.author = this.currentUser;
  	m.thread = this.currentThread;
  	m.isRead = true;

  	this.messagesService.addMessage(m);
  	this.draftMessage = new Message();
  }

  onEnter(event: any): void {
  	this.sendMessage();
  	event.preventDefault();
  }

  scrollToBottom(): void {
  	let scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
  	scrollPane.scrollTop = scrollPane.scrollHeight;
  }

}

// app-chat-message
@Component({
	inputs: ['message'],
	selector: 'app-chat-message',
	template: `
	<div class="msg-container"
     [ngClass]="{'base-sent': !incoming, 'base-receive': incoming}">

	  <div class="avatar"
	       *ngIf="!incoming">
	    <img src="{{message.author.avatarSrc}}">
	  </div>

	  <div class="messages"
	    [ngClass]="{'msg-sent': !incoming, 'msg-receive': incoming}">
	    <p>{{message.text}}</p>
	    <p class="time">{{message.sender}} • {{message.sentAt | fromNow}}</p>
	  </div>

	  <div class="avatar"
	       *ngIf="incoming">
	    <img src="{{message.author.avatarSrc}}">
	  </div>
	</div>
	`
})
export class ChatMessageComponent implements OnInit {
	message: Message;
	currentUser: User;
	incoming: boolean;

	constructor(private usersService: UsersService){}

	ngOnInit(): void {
		this.usersService.currentUser
			.subscribe((user: User) => {
				this.currentUser = user;
				if(this.message.author && user) {
					this.incoming = this.message.author.id !== user.id;
				}
			})
	}
}
