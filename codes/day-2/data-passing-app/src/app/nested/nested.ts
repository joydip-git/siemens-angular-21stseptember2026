import { Component, EventEmitter, input, Input, InputSignal, output, Output, OutputEmitterRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nested',
  styleUrl: './nested.css',
  templateUrl: './nested.html',
})
export class Nested {
  // @Input("personData") personName = ""
  // @Output("personDataChanged") personNameChanged = new EventEmitter<string>()

  personName: InputSignal<string> = input("", { alias: "personData" })
  personNameChanged: OutputEmitterRef<string> = output<string>({ alias: "personDataChanged" })

  updateName(newName: string) {
    this.personNameChanged.emit(newName)
  }
}
