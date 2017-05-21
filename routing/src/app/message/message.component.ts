import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[message]',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  host: {'class': 'ui message'}
})
export class MessageComponent implements OnInit {
	@Input() header: string;
  constructor() { }

  ngOnInit() {
  	console.log('header', this.header)
  }

}
