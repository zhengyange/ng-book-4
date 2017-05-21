import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styles: [`
  .highlight {
  	border: 2px solid red;
  	backgroud-color: yellow;
  	text-aligin: center;
  	margin-bottom: 20px;
  }
  `],
  encapsulation: ViewEncapsulation.None
})
export class StylingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
