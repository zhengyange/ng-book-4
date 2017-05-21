import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/observable';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';

interface IMessagesOperation extends Function {
	(messages: Message[]): Message[];
}

const initialMessages: Message[] = [];

@Injectable()
export class MessagesService {
	newMessages: Subject<Message> = new BehaviorSubject<Message>(null);
	messages: Observable<Message[]>;
	updates: Subject<any> = new Subject<any>();
	create: Subject<Message> = new Subject<Message>();
	markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() { 
  	this.messages = this.updates
  		.scan((messages: Message[], operation: IMessagesOperation) => {
  			return operation(messages)
  		}, initialMessages)
  		.publishReplay(1)
  		.refCount();

  	this.create
  		.map(function(message: Message): IMessagesOperation {
  			return (messages: Message[]) => {
  				return messages.concat(message)
  			}
  		})
  		.subscribe(this.updates);

  	this.newMessages
  		.subscribe(this.create);

  	this.markThreadAsRead 
  		.map( (thread: Thread) => { 
  			return (messages: Message[]) => { 
  				return messages.map( (message: Message) => { 
  					if (message.thread.id === thread.id) {
							message.isRead = true; 
						}
						return message; 
					}); 
				}; 
			})
  		.subscribe(this.updates);
  }

  addMessage(newMessage: Message): void {
  	this.newMessages.next(newMessage);
  	// this.updates.next((messages: Message[]) => {
  	// 	return messages.concat(newMessage);
  	// })
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
  	return this.newMessages
  		.filter((message: Message) => {
  			return (message.thread.id === thread.id) && (message.author.id !== user.id);
  		});
  }
}
