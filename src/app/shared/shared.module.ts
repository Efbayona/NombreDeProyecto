import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ShowPasswordDirective} from "@app/shared/directives/password/show-password.directive";
import {LoadingComponent} from "@app/shared/layouts/loading/loading.component";

@NgModule({
  declarations: [
    ShowPasswordDirective,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  exports: [
    MatProgressBarModule,
    ShowPasswordDirective,
    LoadingComponent
  ]
})
export class SharedModule { }
