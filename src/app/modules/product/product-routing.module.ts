import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from "@app/modules/product/pages/product-detail/product-detail.component";
import {ProductFilterComponent} from "@app/modules/product/pages/product-filter/product-filter.component";

const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
  },
  {
    path: 'filters',
    component: ProductFilterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
