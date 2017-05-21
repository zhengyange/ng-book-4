import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
	selector: 'app-tab',
	template: `
	<div class="ui bottom attached tab segment"
		[class.active]="active"
	>
		<ng-content></ng-content>
	</div>
	`
})
export class TabComponent {
	@Input() title: string;
	active: boolean = false;
	name: string;
}


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  	console.log(this.tabs.toArray())
  	this.tabs.toArray()[0].active = true;
  }

  setActive(tab: TabComponent): void {
  	this.tabs.toArray().forEach((t) => t.active = false);
  	tab.active = true;
  }
}


