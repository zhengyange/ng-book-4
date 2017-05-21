import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AUTH_PROVIDERS } from './services/auth.service';
import { LoggedInGuard } from './loggedIn.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ProductsComponent, MainComponent, ByIdComponent, InterestComponent, SportifyComponent, childRoutes } from './products/products.component';
import { StylingComponent } from './styling/styling.component';
import { PopupDirective, PopupComponent } from './popup/popup.component';
import { MessageComponent } from './message/message.component';
import { TabsComponent, TabComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'contact', redirectTo: 'contacts' },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard] },
  { path: 'products', component: ProductsComponent, children: childRoutes},
  { path: 'styling', component: StylingComponent},
  { path: 'popup', component: PopupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
    ProductsComponent,
    MainComponent,
    ByIdComponent,
    InterestComponent,
    SportifyComponent,
    StylingComponent,
    PopupComponent,
    PopupDirective,
    MessageComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
