import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProgressBarMode} from "@angular/material/progress-bar";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-multi-factor',
  templateUrl: './multi-factor.component.html',
  styleUrls: ['./multi-factor.component.scss']
})
export class MultiFactorComponent implements OnInit {


  user!: any;
  codeValid: boolean = false;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value: number = 100;
  interval: any;
  setTimeout: any;

  mfaEmail!: boolean;
  email: string = '';
  private code: string = '';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

  }

  onCodeCompleted(codeCompleted: string) {
    this.code = codeCompleted;
    this.codeValid = true;
  }


  sendCode(): void {

  }

  resendCode(): void {
  }


}
