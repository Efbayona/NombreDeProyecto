import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "@app/modules/authentication/services/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {environment} from "@env/environment";
import {MultiFactorComponent} from "@app/modules/authentication/pages/multi-factor/multi-factor.component";

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
              private router: Router,) {
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


  sendLogin(){
    console.log('ejecuta')
    if(this.formLogin.valid){
      // this.loader.show();
      const authLogin: any = {
        user_name: this.formLogin.get('user_name')?.value,
        user_password: this.formLogin.get('user_password')?.value
      }
      this.auth.login(authLogin).subscribe({
        next: (data: any) =>{
          console.log('ejecuta')
          this.formLogin.reset();
          //Buscar Como setear y obtener data del local de mejor forma
           this.dialog.open(MultiFactorComponent , {
             width: '600px'
            })
        }
      })
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

}
