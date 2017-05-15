import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, ProductsList, ProductRow, ProductImage, PriceDisplay, ProductDepartment } from './app.component';
import { NgdrComponent } from './ngdr/ngdr.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsList,
    ProductRow,
    ProductImage,
    PriceDisplay,
    ProductDepartment,
    NgdrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
