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
    { firstname: 'Rick', lastname: 'Grimes', age: 47 },
    { firstname: 'Glenn', lastname: 'Rhee', age: 32 },
    { firstname: 'Daryl', lastname: 'Dyxon', age: 34 },
    { firstname: 'Negan', lastname: 'Lucile', age: 38 },
    { firstname: 'Abraham', lastname: 'Ford', age: 39 },
  ];

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }
}
