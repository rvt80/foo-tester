import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { FooLibModule } from '@foo/lib';
import { BazLibModule } from 'baz-lib';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FooLibModule,
    BazLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
