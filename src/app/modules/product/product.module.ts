import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {SharedModule} from "@app/shared/shared.module";
import { ProductFilterComponent } from './pages/product-filter/product-filter.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductFilterComponent
  ],
  exports: [
    ProductFilterComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatCheckboxModule,
    MatSliderModule
  ]
})
export class ProductModule { }
