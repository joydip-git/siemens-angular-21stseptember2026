import { Component, inject, OnDestroy } from '@angular/core';
import { FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { PasswordValidator } from '../../directives/password-validator-directive';
import { AuthService } from '../../services/auth-service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, PasswordValidator],
  selector: 'app-registration',
  styleUrl: './registration.css',
  templateUrl: './registration.html',
})
export class Registration implements OnDestroy {
  private authSvc = inject(AuthService)
  private regsiterSubscription?: Subscription;
  private router = inject(Router)

  // username = ''
  // password = ''

  // register(uname: NgModel, pwd: NgModel) {
  //   console.log(uname.control.value, pwd.control.value);
  // }
  // register(frm: NgForm) {
  //   console.log(frm.controls);
  // }
  register(frm: FormGroup) {
    this.regsiterSubscription =
      this.authSvc
        .register(frm.value as User)
        .subscribe({
          next: (apiResponse) => {
            if (apiResponse.data !== null)
              window.alert(apiResponse.message)
            else
              window.alert(apiResponse.message)
          },
          error: (err) => {
            window.alert(err.message)
          },
          complete: () => {
            this.router.navigate(['/auth/login'])
          }
        })
  }
  ngOnDestroy(): void {
    this.regsiterSubscription?.unsubscribe()
  }
}
