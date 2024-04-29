import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'administration',
    loadChildren: () => import('@app/modules/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('@app/modules/main/main-routing.module').then(m => m.MainRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('@app/modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
