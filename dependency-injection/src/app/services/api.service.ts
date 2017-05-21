import { Injectable, Inject } from '@angular/core';

export const API_URL: string = 'API_URL';
// @Injectable()
export class ApiService {

  constructor(@Inject(API_URL) private apiUrl: string) { }

  get(): void {
  	console.log(`Calling ${this.apiUrl}/endpoint...`);
  }
}
