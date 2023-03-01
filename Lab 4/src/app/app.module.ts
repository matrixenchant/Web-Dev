import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { RatingComponent } from './products-item/rating/rating.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [AppComponent, ProductsItemComponent, RatingComponent, ProductsListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
