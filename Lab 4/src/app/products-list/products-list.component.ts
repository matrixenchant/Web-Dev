import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input()
  products!: Product[];

  @Input()
  categories!: string[];

  activeCategory: string = 'all';
  choiceCategory(cat: string) {
    this.activeCategory = cat
  }
  filterProducts() {
    return this.products.filter((x: Product) => this.activeCategory === 'all' ? true : x.type === this.activeCategory)
  }
  deleteProduct(el: Product) {
    this.products = this.products.filter((x: Product) => x.id !== el.id)
  }
}
