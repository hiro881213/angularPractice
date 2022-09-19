import { Component,Input } from '@angular/core';
import { products } from '../products';
import { Product} from '../shared/product.model'
@Component({
  selector: 'app-product-Detail',
  templateUrl: './product-Detail.component.html',
})

export class ProductDetailComponent {
  @Input() name: any;
}
