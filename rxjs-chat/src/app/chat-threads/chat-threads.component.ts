import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { ThreadsService } from '../thread/threads.service';
import { Thread } from '../thread/thread.model';


@Component({
  selector: 'app-chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {
	threads: Observable<any[]>;

  constructor(private threadsService: ThreadsService) { 
  	this.threads = threadsService.orderedThreads;
  }

  ngOnInit() {
  }

}

@Component({
	selector: 'app-chat-thread',
  template: `
  <div class="media conversation">
    <div class="pull-left">
      <img class="media-object avatar" src="{{ thread.avatarSrc }}" />
    </div>
    <div class="media-body">
      <h5 class="media-heading contact-name">
        {{ thread.name }}
        <span *ngIf="selected">&bull;</span>
      </h5>
      <small class="message-preview">{{ thread.lastMessage.text }}</small>
    </div>
    <a (click)="clicked($event)" class="div-link">Select</a>
  </div>
  `
})
export class ChatThread implements OnInit {
  @Input() thread: Thread;
  selected: boolean = false;

  constructor(private threadService: ThreadsService) {

  }

  ngOnInit(): void {
    this.threadService.currentThread
      .subscribe((currentThread: Thread) => {
        this.selected = currentThread && this.thread && (currentThread.id === this.thread.id);
      })
  }

  clicked(event: any): void {
    this.threadService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
