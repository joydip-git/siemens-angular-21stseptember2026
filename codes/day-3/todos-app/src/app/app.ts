import { Component, signal } from '@angular/core';
import { TodoList } from './components/todo-list/todo-list';


@Component({
  selector: 'app-root',
  imports: [TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected show = signal(false)
}
