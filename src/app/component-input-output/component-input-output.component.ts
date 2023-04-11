import { Component } from '@angular/core';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css'],
})
export class ComponentInputOutputComponent {
  userData: User[] = [
    { firstname: 'Rick', lastname: 'Grimes', age: 47 },
    { firstname: 'Glenn', lastname: 'Rhee', age: 32 },
    { firstname: 'Daryl', lastname: 'Dyxon', age: 34 },
    { firstname: 'Negan', lastname: 'Lucile', age: 38 },
    { firstname: 'Abraham', lastname: 'Ford', age: 39 },
  ];

  receivedUser: User | undefined;

  onDeleteUserParent(index: number) {
    console.log(index);
    this.userData.splice(index, 1);
  }

  onReceivedUser(user: User) {
    this.receivedUser = user;
  }
}
