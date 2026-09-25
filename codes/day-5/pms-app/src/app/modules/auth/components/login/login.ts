import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordcheck } from '../../validators/password-check';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../shared/services/token-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnDestroy {
  private formBuilder = inject(FormBuilder)
  private authSvc = inject(AuthService)
  private loginSubscription?: Subscription;
  private tokenSvc = inject(TokenService)
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)

  // username = new FormControl('username')
  // password = new FormControl('password')
  //ctrl = this.formBuilder.control('',[])

  // loginForm = new FormGroup({
  //   username: new FormControl('username', [Validators.required, Validators.email]),
  //   password: new FormControl('password', [Validators.required, passwordcheck])
  // })

  loginForm = this.formBuilder.group({
    username: ['username', [Validators.required, Validators.email]],
    password: ['password', [Validators.required, passwordcheck]]
  })

  login() {
    const user = this.loginForm.value as User
    this.loginSubscription =
      this.authSvc.login(user).subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.tokenSvc.saveToken(apiResponse.data)
          } else {
            window.alert(apiResponse.message)
          }
        },
        error: (err) => {
          window.alert(err.message)
        },
        complete: () => {
          const returnUrl = this.currentRoute.snapshot.queryParams['returnUrl']
          if (returnUrl) {
            this.router.navigate([returnUrl])
          } else
            this.router.navigate(['/products'])
        }
      })
  }
  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }
}
