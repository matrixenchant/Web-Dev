import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductsItemComponent, RatingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
