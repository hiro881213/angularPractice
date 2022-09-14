import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPractice000';

  price = 100;

  addPrice = () => {

    const number = 100;
    // return number + 50
    this.price += number;

  };

  // constructor() {
  //   this.price = this.addPrice()
  // }

}
