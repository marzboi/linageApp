import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IntersectionObserverModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
