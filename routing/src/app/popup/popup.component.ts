import { Component, OnInit, Input, Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[popup]',
	exportAs: 'popup',
	host: {
		'(click)': 'displayMessage()'
	}
})
export class PopupDirective {
	@Input() message: String;
	constructor(_elementRef: ElementRef) {
		console.log('Directive bound', _elementRef)
	}

	displayMessage(): void {
		alert(this.message)
	}
}



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
