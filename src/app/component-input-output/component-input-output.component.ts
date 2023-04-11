import { Component } from '@angular/core';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css'],
})
export class ComponentInputOutputComponent {
  userData: User[] = [
    { firstname: 'John', lastname: 'Grimes', age: 12 },
    { firstname: 'Jim', lastname: 'Ree', age: 24 },
    { firstname: 'Jane', lastname: 'Brown', age: 123 },
    { firstname: 'Joahna', lastname: 'Annalise', age: 20 },
    { firstname: 'Jane', lastname: 'Cruz', age: 123 },
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
