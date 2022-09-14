import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPractice000';

  price = 100;

  addPrice = (price:number, num: number) => {

    const result = price + num
    return result

  };

  result = this.addPrice(this.price, 50);

}
