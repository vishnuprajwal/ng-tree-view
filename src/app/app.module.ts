import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular';
import { enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   
    BrowserModule,
    HttpClientModule,
      DxTreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
