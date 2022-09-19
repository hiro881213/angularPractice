import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
})

export class ProductListComponent {
  products = products;
}
