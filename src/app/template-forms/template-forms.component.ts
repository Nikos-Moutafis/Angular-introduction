import { Component, ViewChild } from '@angular/core';
import { User } from '../app.interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent {
  @ViewChild(NgForm) formControll!: NgForm;

  users: User[] = [];
  onSubmit(formData: any) {
    console.log(formData);
    const formValue = formData.value as User;
    this.users.push(formValue);
    this.formControll.reset();
  }
}
