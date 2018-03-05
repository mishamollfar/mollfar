import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {ServiceModule} from './service/service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarHttpModule,
    LoadingBarModule.forRoot(),
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
