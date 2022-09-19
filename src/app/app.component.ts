import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPractice000';

  students = [
    {
      name: "太郎",
      age: 70,
      gender: "男"
    },
    {
      name: "二郎",
      age: 60,
      gender: "男"
    },
    {
      name: "三郎",
      age: 50,
      gender: "男"
    }];

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
