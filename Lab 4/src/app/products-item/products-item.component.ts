import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent {
  @Input()
  product!: Product;

  mainImg: number = 0;

  shareHandler(type: 'whatsapp' | 'telegram') {
    if (type === 'whatsapp')
      window.open(`https://wa.me/7772031225?text=${this.product.url}`);
    if (type === 'telegram')
      window.open(
        `https://telegram.me/share/url?url=${this.product.url}&text=${this.product.name}`
      );
  }
}
