import { Component, signal } from '@angular/core';
import { Another } from './another/another';

@Component({
  selector: 'app-root',
  imports: [Another],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');

  constructor() {
    console.log("App created...");
  }
  clicked() {
    window.alert('button clicked')
  }
}
