import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup({});


  constructor() {
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

}
