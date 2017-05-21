import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tabs: any;

  constructor() {
  	this.tabs = [
  		{ title: 'About', content: 'This is the About tab'},
  		{ title: 'Blog', content: 'This is our blog'},
  		{ title: 'Contact us', content: 'Contact us here'}
  	]
  }
}
