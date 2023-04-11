import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/app.interfaces';

@Component({
  selector: 'app-simple-table1',
  templateUrl: './simple-table1.component.html',
  styleUrls: ['./simple-table1.component.css'],
})
export class SimpleTable1Component {
  @Input() userData: User[] = [];
  @Output() deleteUserChild = new EventEmitter<number>();
  @Output() sendUserFromChild = new EventEmitter<User>();

  onDeleteClick(i: number) {
    this.deleteUserChild.emit(i);
  }

  onSendUserButtonClick(user: User) {
    this.sendUserFromChild.emit(user);
  }
}
