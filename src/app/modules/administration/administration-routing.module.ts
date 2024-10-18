import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from "@app/modules/administration/pages/administration/administration.component";
import {DashboardComponent} from "@app/modules/administration/pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
