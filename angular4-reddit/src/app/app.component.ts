import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  articles: Article[];
  constructor() {
  	this.articles = [
	  	new Article('Angular 4', 'http://angular.cn', 10),
	  	new Article('Fullstack', 'http://fulstack.cn', 10),
	  	new Article('Angular Homepage', 'http://angular.cn', 10)
  	]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  	console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  	this.articles.unshift(new Article(title.value, link.value, 0));
  	title.value = '';
  	link.value = '';
  	return false;
  }

  sortedArticles(): Article[] {
  	return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
