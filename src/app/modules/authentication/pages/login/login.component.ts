import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../../core/services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private _alert: AlertService) {
  }
  ngOnInit() {
    this._alert.warning('Funca');
  }
}
