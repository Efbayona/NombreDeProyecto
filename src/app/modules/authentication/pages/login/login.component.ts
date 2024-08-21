import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "@app/modules/authentication/services/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "@env/environment";
import {
  MultiFactorComponent
} from "@app/modules/authentication/pages/multifactor-authentication/multi-factor.component";
import {StorageService} from "@app/core/services/storage/storage.service";
import {UserLoginRequest, UserLoginResponse} from "@app/modules/authentication/interfaces/authentication.interface";
import {
  LogInWithGoogleComponent
} from "@app/modules/authentication/modals/log-in-with-google/log-in-with-google.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  variable: string = environment.api + 'oauth2/authorization/google';

  public formLogin: FormGroup = new FormGroup({});

  constructor(private auth: AuthenticationService,
              private dialog: MatDialog,
              private storage: StorageService,
              private _dialog: MatDialog,) {
  }

  ngOnInit() {
    this.initFormLogin();
  }

  public initFormLogin() {
    this.formLogin = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
      user_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    })
  }


  sendLogin() {
    if (this.formLogin.valid) {
      const authLogin: UserLoginRequest = {
        user_name: this.formLogin.get('user_name')?.value,
        user_password: this.formLogin.get('user_password')?.value
      }
      this.auth.login(authLogin).subscribe({
        next: (data: UserLoginResponse) => {
          this.storage.setItem('user_login', data);
          this.formLogin.reset();
          this.dialog.open(MultiFactorComponent, {
            width: '600px'
          });
        }
      })
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

  onLogin() {
    const url = this.variable;
    const title = 'Mini Ventana';
    const options = 'width=400,height=300,top=100,left=100';
    window.open(url, title, options);
  }


}
