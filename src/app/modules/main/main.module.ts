import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {SharedModule} from "@app/shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SlickCarouselModule,
    SharedModule
  ]
})
export class MainModule { }
