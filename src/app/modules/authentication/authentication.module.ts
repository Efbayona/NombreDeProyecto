import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { MultiFactorComponent } from '@app/modules/authentication/pages/multifactor-authentication/multi-factor.component';
import {CodeInputModule} from "angular-code-input";
import {SharedModule} from "@app/shared/shared.module";
import { LogInWithGoogleComponent } from './modals/log-in-with-google/log-in-with-google.component';

@NgModule({
  declarations: [
    LoginComponent,
    MultiFactorComponent,
    LogInWithGoogleComponent
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
