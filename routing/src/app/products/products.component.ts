import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToProduct(id: string): void {
  	this.router.navigate(['./', id], {relativeTo: this.route});
  }
}

@Component({
	selector: 'app-main',
	template: `<h1>Main Component</h1>`
})
export class MainComponent {

}

@Component({
	selector: 'app-byid',
	template: `<h1>you selected product {{ id }}</h1>`
})
export class ByIdComponent {
	id: string;

	constructor(private route: ActivatedRoute){
		route.params.subscribe(params => {this.id = params['id']})
	}
}

@Component({
	selector: 'app-interest',
	template: `<h1>InterestComponent</h1>`
})
export class InterestComponent {

}

@Component({
	selector: 'app-sportify',
	template: `<h1>SportifyComponent</h1>`
})
export class SportifyComponent {

}

export const childRoutes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full'},
	{ path: 'main', component: MainComponent },
	{ path: 'interest', component: InterestComponent },
	{ path: 'sportify', component: SportifyComponent },
	{ path: ':id', component: ByIdComponent }
];
