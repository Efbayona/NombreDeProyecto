import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {SharedModule} from "@app/shared/shared.module";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    HomeComponent
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
