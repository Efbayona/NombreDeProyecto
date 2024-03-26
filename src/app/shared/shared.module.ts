import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ShowPasswordDirective} from "@app/shared/directives/password/show-password.directive";

@NgModule({
  declarations: [
    ShowPasswordDirective,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    MatProgressBarModule,
    ShowPasswordDirective,
  ]
})
export class SharedModule { }
