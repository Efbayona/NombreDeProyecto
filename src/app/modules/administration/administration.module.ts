import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationRoutingModule} from './administration-routing.module';
import {MainComponent} from "@app/modules/administration/pages/main/main.component";
import {DashboardComponent} from "@app/modules/administration/pages/dashboard/dashboard.component";

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule {
}
