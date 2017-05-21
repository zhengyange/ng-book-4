import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { CounterComponent, CStore, counterStore } from './counter/counter.component';

import { appStoreProviders } from './store/app.store';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatNavbarComponent } from './containers/chat-navbar/chat-navbar.component';
import { ChatThreadsComponent } from './containers/chat-threads/chat-threads.component';
import { ChatWindowComponent } from './containers/chat-window/chat-window.component';
import { ChatThreadComponent } from './containers/chat-thread/chat-thread.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    FromNowPipe,
    CounterComponent,
    ChatPageComponent,
    ChatNavbarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatThreadComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    appStoreProviders,
    { provide: CStore, useValue: counterStore }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
