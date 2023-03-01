import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent {
  @Input()
  product!: Product;

  @Output()
  deleteProductEmitter: EventEmitter<any> = new EventEmitter();

  deleteProduct() {
    this.deleteProductEmitter.emit();
  }

  mainImg: number = 0;

  shareHandler(type: 'whatsapp' | 'telegram') {
    if (type === 'whatsapp')
      window.open(`https://wa.me/7772031225?text=${this.product.url}`);
    if (type === 'telegram')
      window.open(
        `https://telegram.me/share/url?url=${this.product.url}&text=${this.product.name}`
      );
  }

  likeProduct() {
    this.product.likes++
  }
}
