import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { PasswordValidator } from '../../directives/password-validator-directive';

@Component({
  imports: [FormsModule, PasswordValidator],
  selector: 'app-registration',
  styleUrl: './registration.css',
  templateUrl: './registration.html',
})
export class Registration {
  // username = ''
  // password = ''

  // register(uname: NgModel, pwd: NgModel) {
  //   console.log(uname.control.value, pwd.control.value);
  // }
  // register(frm: NgForm) {
  //   console.log(frm.controls);
  // }
  register(frm: FormGroup) {
    console.log(frm.value);
  }
}
