import {  NgModule, Component, enableProdMode } from '@angular/core';


import { Product, Service } from './app.service';
import * as data from "./database.json";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  currentItem: Product;
  products: any;

  constructor(service: Service) {
      this.products = service.getProducts();
      this.currentItem = this.products[0];
  }
  selectItem(e) {
      this.currentItem = e.itemData;
  }
  title = 'app-treeview-nxt';
}

// platformBrowserDynamic().bootstrapModule(AppModule);