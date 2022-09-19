import { Component } from '@angular/core';
import { products } from '../products';
import { Product} from '../shared/product.model'
@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
})

export class ProductListComponent {
  products: Product[] = products;

  share() {
    window.alert("AAAAA");
  }

  notify() {
    window.alert("お知らせを受け取ります");
  }
}
