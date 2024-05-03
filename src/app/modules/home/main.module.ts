import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from "@app/shared/shared.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SlickCarouselModule,
    SharedModule,
    NgSelectModule
  ]
})
export class MainModule { }
