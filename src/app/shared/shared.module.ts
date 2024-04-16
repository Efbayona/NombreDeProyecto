import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ShowPasswordDirective} from "@app/shared/directives/password/show-password.directive";
import {LoadingComponent} from "@app/shared/layouts/loading/loading.component";
import {InputMaskDirective} from "@app/shared/directives/input-mask/input-mask.directive";

@NgModule({
  declarations: [
    ShowPasswordDirective,
    LoadingComponent,
    InputMaskDirective
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  exports: [
    MatProgressBarModule,
    ShowPasswordDirective,
    LoadingComponent,
    InputMaskDirective
  ]
})
export class SharedModule { }
