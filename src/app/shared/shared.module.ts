import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ShowPasswordDirective} from "@app/shared/directives/password/show-password.directive";
import {LoadingComponent} from "@app/shared/layouts/loading/loading.component";
import {InputMaskDirective} from "@app/shared/directives/input-mask/input-mask.directive";
import {CardComponent} from "@app/shared/layouts/card/card.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ShowPasswordDirective,
    LoadingComponent,
    InputMaskDirective,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    MatProgressBarModule,
    ShowPasswordDirective,
    LoadingComponent,
    InputMaskDirective,
    CardComponent,
    NgSelectModule,
    FormsModule
  ]
})
export class SharedModule { }
