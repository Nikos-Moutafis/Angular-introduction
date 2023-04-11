import { Component } from '@angular/core';
import { orderBy } from 'lodash-es';

export interface User {
  firstname: string;
  lastname: string;
  age: number;
}
@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css'],
})
export class ComponentInputComponent {
  userData: User[] = [
    { firstname: 'Rick', lastname: 'Grimes', age: 47 },
    { firstname: 'Glenn', lastname: 'Rhee', age: 32 },
    { firstname: 'Daryl', lastname: 'Dyxon', age: 34 },
    { firstname: 'Negan', lastname: 'Lucile', age: 38 },
    { firstname: 'Abraham', lastname: 'Ford', age: 39 },
  ];

  sortByAgeDesc() {
    this.userData = orderBy(this.userData, ['age'], ['desc']);
  }

  sortByAgeAsc() {
    this.userData = orderBy(this.userData, ['age'], ['asc']);
  }

  sortByAgeDescLastDesc() {
    this.userData = orderBy(
      this.userData,
      ['age', 'lastname'],
      ['desc', 'desc']
    );
  }

  init() {
    this.userData = [
      { firstname: 'John', lastname: 'Grimes', age: 12 },
      { firstname: 'Jim', lastname: 'Ree', age: 24 },
      { firstname: 'Jane', lastname: 'Brown', age: 123 },
      { firstname: 'Joahna', lastname: 'Annalise', age: 20 },
      { firstname: 'Jane', lastname: 'Cruz', age: 123 },
    ];
  }
}
