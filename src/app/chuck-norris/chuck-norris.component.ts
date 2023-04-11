import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Joke } from '../app.interfaces';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css'],
})
export class ChuckNorrisComponent implements OnInit {
  constructor(private http: HttpClient) {}
  joke = '';
  random = 'Random joke for Chuck Norris';

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    this.http
      .get<Joke>('https://api.chucknorris.io/jokes/random')
      .subscribe((joke: Joke) => {
        this.joke = joke.value;
        console.log(joke.value);
      });
  }
}
