import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http" ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { HeaderModule } from './component/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
  // return new TranslateHttpLoader(http,`./${isProduction ? 'hotel-app/' : ''}assets/i18n/`, '.json');
}
