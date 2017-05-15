import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  // templateUrl: './app.component.html',
  template: `
  	<div class="inventory-app">
  		<products-list
  			[productList]="products"
  			(onProductSelected)="productWasSelected($event)"
  		>
  		</products-list>
  	</div>
  	<app-ngdr></app-ngdr>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
  	this.products = [
	  	new Product(
	  		'NICEHAT',
	  		'A Nice Black Hat',
	  		'/assets/images/products/black-hat.jpg',
	  		['Men', 'Accessories', 'Hats'],
	  		29.99
  		),
	  	new Product(
	  		'NEATOJACKET',
	  		'Blue Jacket',
	  		'/assets/images/products/blue-jacket.jpg',
	  		['Women', 'Apparel', 'Jackets & Vests'],
	  		239.99
  		),
	  	new Product(
	  		'MYSHOES',
	  		'Black Running Shoes',
	  		'/assets/images/products/black-shoes.jpg',
	  		['Men', 'Shoes', 'Running Shoes'],
	  		109.99
  		)
  	];
  }

  productWasSelected(product: Product): void {
  	console.log('Product clicked', product)
  }
}

@Component({
	selector: 'products-list',
	template: `
	<div class="ui items">
		<product-row
			*ngFor="let myProduct of productList"
			[product]="myProduct"
			(click)="clicked(myProduct)"
			[class.selected]="isSelected(myProduct)"
		>
		</product-row>
	</div>
	`,
	inputs: ['productList'],
	outputs: ['onProductSelected']
})
export class ProductsList {
	productList: Product[];
	onProductSelected: EventEmitter<Product>;
	private currentProduct: Product;

	constructor() {
		this. onProductSelected = new EventEmitter();
	}

	clicked(product: Product): void {
		this.currentProduct = product;
		this.onProductSelected.emit(product);
	}
	isSelected(product: Product): boolean {
		if(!product || !this.currentProduct) {
			return false;
		}
		return product.sku === this.currentProduct.sku;
	}
}

@Component({
	selector: 'product-row',
	inputs: ['product'],
	host: {'class': 'item'},
	template: `
	<product-image [product]="product"></product-image>
	<div class="content">
		<div class="header">{{ product.name }}</div>
		<div class="meta">
			<div class="product-sku">SKU #{{ product.sku }}</div>
		</div>
		<div class="description">
			<product-department [product]="product"></product-department>
		</div>
	</div>
	<price-display [price]="product.price"></price-display>
	`
})
export class ProductRow {
	product: Product;

}

@Component({
	selector: 'product-image',
	host: {class: 'ui small image'},
	inputs: ['product'],
	template: `
	<img calss="product-image" [src]="product.imageUrl" >
	`
})
export class ProductImage {
	product: Product;
}

/**
 * 价格展示组件
 * @type {[type]}
 */
@Component({
	selector: 'price-display',
	inputs: ['price'],
	template: `
	<div class="price-display">\${{ price }}</div>
	`
})
export class PriceDisplay {
	price: number;
}

/**
 * 产品分类组件
 */
@Component({
	selector: 'product-department',
	inputs: ['product'],
	template: `
	<div class="product-department">
		<span *ngFor="let name of product.department; let i=index">
			<a href="#">{{ name }}</a>
			<span>{{ i < (product.department.length - 1) ? '>' : '' }}</span>
		</span>
	</div>
	`
})
export class ProductDepartment {
	product: Product;
}


