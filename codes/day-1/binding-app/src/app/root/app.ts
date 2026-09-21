// import { NgFor, NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  personName = 'anil'
  inputwidth = 400
  people = ["anil", "sunil", "joy"]
  show = true
  toggle() {
    this.show = !this.show
  }
  // updateName(e: Event) {
  //   const inputElement = e.target as HTMLInputElement
  //   this.personName = inputElement.value
  // }
  updateName(value: string) {
    this.personName = value
  }
}
