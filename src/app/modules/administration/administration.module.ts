import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AdministrationRoutingModule} from './administration-routing.module';
import { AdministrationComponent } from './pages/administration/administration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    NgOptimizedImage
  ]
})
export class AdministrationModule {
}
