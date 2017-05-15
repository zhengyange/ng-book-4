import { Http, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SearchResult } from './search-result.model';

export const YOUTUBE_API_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeService {
	constructor(private http: Http,
							@Inject(YOUTUBE_API_KEY) private apiKey: string,
							@Inject(YOUTUBE_API_URL) private apiUrl: string
							){}
	// search(query: string): any {
		
	// }
	search(query: string): Observable<SearchResult[]> {
		let params: string = [
			`query=${query}`,
			`key=${this.apiKey}`,
			`part=snippet`,
			`type=video`,
			`maxResults=10`
		].join('&');
		let queryUrl: string = `${this.apiUrl}?${params}`;
		let cnpApi: string = `https://cnodejs.org/api/v1/topics?page=${query}&limit=10&tab=all&mdrender=true`;
		return this.http.get(cnpApi)
			.map((response: Response) => {
				return (<any>response.json()).data.map(item => {
					return item;
				})
			})
	}
}

