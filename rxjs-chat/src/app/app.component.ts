import { Component } from '@angular/core';
import { MessagesService } from './message/messages.service';
import { ThreadsService } from './thread/threads.service';
import { UsersService } from './user/users.service';
import { ChatExampleData } from './data/chat.example.data';

import * as Rx from 'rxjs';
import { Subject, BehaviorSubject, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private messageService: MessagesService,
  						private threadService: ThreadsService,
  						private userService: UsersService) {
  	ChatExampleData.init(messageService, threadService, userService);
  }
}

//
const streamA$ = Observable.of(2, 10);
const streamB$ = Observable.of(4);

const streamC$ = Observable.concat(streamA$, streamB$)
  .reduce((x, y) => x  + y);

const observer: Subject<any> = new Subject<any>();
observer.subscribe({
	next: v => console.log(v)
})

// observer.next(30)

// streamC$.subscribe(observer); //prints 6

// observer.next(30)

let obs1: Observer<any> = { 
    next: function(val){console.log(val)},
    error: function(){console.log(222)},
    complete: function(){console.log('complete')}
 }
streamC$.subscribe(obs1);
obs1.next(111)







