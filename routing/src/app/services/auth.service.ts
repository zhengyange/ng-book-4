import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean {
  	if(user === 'user' && password === 'password') {
  		localStorage.setItem('username', user);
  		return true;
  	}

  	return false;
  }

  logout(): void {
  	localStorage.removeItem('username');
  }

  // 这里使用any类型，有可能返回null
  getUser(): any {
  	return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
  	return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
	{ provide: AuthService, useClass: AuthService }
];
