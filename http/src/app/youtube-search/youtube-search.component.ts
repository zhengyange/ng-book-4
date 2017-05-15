import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/scan';
import { SearchResult } from './search-result.model';
import { YouTubeService } from './youtube.service';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
	loadingres: boolean;
	results: SearchResult[];
  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
		this.results = results;
	}

}

@Component({
	outputs: ['loading', 'results'],
	selector: 'app-search-box',
	template: `
		<input type="text" class="form-control" placeholder="Search" autofocus >
	`
})
export class SearchBoxComponent implements OnInit {
	loading: EventEmitter<boolean> = new EventEmitter<boolean>();
	results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

	constructor(private youtube: YouTubeService, private el: ElementRef) {
		// code...
	}

	ngOnInit(): void {
		const search$ = Observable.fromEvent(this.el.nativeElement, 'keyup')
			.map((e: any) => e.target.value)
			.filter((text: string) => text.length > 0)
			.debounceTime(250)
			.scan(count => count + 1, 0)
			.do(() => this.loading.emit(true))
			// .map((query: string) => this.youtube.search(query))
			.map((page: string) => this.youtube.search(page))
			.switch()
			.subscribe((results: SearchResult[]) => {
				this.loading.emit(false);
				this.results.emit(results);
			}, (err: any) => {
				console.log(err);
				this.loading.emit(false);
			}, () => {
				this.loading.emit(false);
			})
	}
}

@Component({
	selector: 'app-search-result',
	inputs: ['result'],
	// template: `
	// 	<div class="col-sm-6 col-md-3">
	// 	   <div class="thumbnail">
	// 	     <img src="{{result.thumbnailUrl}}">
	// 	     <div class="caption">
	// 	       <h3>{{result.title}}</h3>
	// 	       <p>{{result.description}}</p>
	// 	       <p><a href="{{result.videoUrl}}"
	// 	             class="btn btn-default" role="button">
	// 	             Watch</a></p>
	// 	     </div>
	// 	   </div>
	// 	 </div>
	// `
	template: `
	<li class="list-li" style="margin-top: 20px;">
		<a href="/detail/58eee565a92d341e48cfe7fc" class="">
			<div class="item item-top">
				<span [ngClass]="{top: result.top, tab: result.top}">置顶</span> 
				<span class="title">{{ result.title }}</span>
			</div> 
			<div class="item item-bottom">
				<img src="{{result.author.avatar_url}}" alt="" onerror="this.src='../assets/img/default.png'"> 
				<div class="info">
					<div class="base-info info-style">
						<span class="username">{{result.author.loginname}}</span> 
						<span class="createtime"><i class="fa fa-clock-o"></i>{{result.last_reply_at.substr(0,10)}}</span>
					</div> 
					<div class="other-info info-style">
						<span><i class="fa fa-comment-o"></i>{{result.reply_count}}</span> 
						<span><i class="fa fa-eye"></i>{{result.visit_count}}</span>
					</div>
				</div>
			</div>
		</a>
	</li>
	`
})
export class SearchResultComponent implements OnInit{
	result: SearchResult;

	ngOnInit(): void {
		// console.log(this.result)
	}
}

