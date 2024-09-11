import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "@app/modules/main/main.component";
import {AuthAdminGuard} from "@app/core/guards/auth-admin.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('@app/modules/home/main.module').then(m => m.MainModule)
      },
      {
        path: 'product',
        loadChildren: () => import('@app/modules/product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'administration',
        loadChildren: () => import('@app/modules/administration/administration.module').then(m => m.AdministrationModule),
        canActivate: [AuthAdminGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
