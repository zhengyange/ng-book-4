import { Component, OnInit, ReflectiveInjector } from '@angular/core';

export class MyService {
	getValue(): string {
		return 'a value';
	}
}

export class ParamService {
	constructor(private phrase: string) {
		console.log('ParamService is being created with phrase', phrase);
	}

	getValue(): string {
		return this.phrase;
	}
}

@Component({
  selector: 'app-injector',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.css']
})
export class InjectorComponent implements OnInit {
	mySerivce0: MyService;

  constructor(private mySerivce: MyService, private paramService: ParamService) { 
  	console.log(this.mySerivce)
  	let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
  	this.mySerivce0 = injector.get(MyService);
  	console.log('Same instance?', this.mySerivce0 === this.mySerivce);
  }

  ngOnInit() {
  }

  invokeService(): void {
  	console.log('MyService returned', this.mySerivce.getValue());
  }

}
