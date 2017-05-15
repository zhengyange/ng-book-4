import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngdr',
  templateUrl: './ngdr.component.html',
  styleUrls: ['./ngdr.component.css']
})
export class NgdrComponent implements OnInit {
	private color: string;
	private fontSize: number;
	
  constructor() { }
  apply(color: string, fontSize: number): void {
  	this.color = color;
  	this.fontSize = fontSize;
  }
  ngOnInit() {
  }

}
