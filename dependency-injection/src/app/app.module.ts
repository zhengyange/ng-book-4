import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { API_URL, ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { InjectorComponent, MyService, ParamService } from './injector/injector.component';
import { ApiComponent } from './api/api.component';

const isProduction: boolean = false;

@NgModule({
  declarations: [
    AppComponent,
    InjectorComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // MyService
    {provide: MyService, useClass: MyService},
    {provide: ParamService, useFactory: (): ParamService => new ParamService('YOLO')},
    {provide: ApiService, useClass: ApiService},
    {
      provide: API_URL,
      useValue: isProduction ?
        'https://production-api.sample.com' :
        'http://dev-api.sample.com'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
