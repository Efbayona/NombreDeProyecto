import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { MultiFactorComponent } from './pages/multi-factor/multi-factor.component';
import {CodeInputModule} from "angular-code-input";
import {SharedModule} from "@app/shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent,
    MultiFactorComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    CodeInputModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
