import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'administration',
    loadChildren: () => import('@app/modules/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('@app/modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'product',
    loadChildren: () => import('@app/modules/product/product.module').then(m => m.ProductModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
