import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

interface User {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent {
  paragraph = new LoremIpsum().generateParagraphs(1);
  paragraphVisible = true;

  userData: User[] = [
    { firstname: 'John', lastname: 'Abram', age: 12 },
    { firstname: 'Jim', lastname: 'Abram', age: 24 },
    { firstname: 'Jane', lastname: 'Abram', age: 123 },
    { firstname: 'Joahna', lastname: 'Abram', age: 20 },
  ];

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }
}
