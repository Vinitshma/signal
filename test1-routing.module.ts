import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { HomesComponent } from './homes/homes.component';

const routes: Routes = [
  {
    path:"", component:DefaultComponent, 
    children:[
      {path:"home", component:HomesComponent},
      {path:"dashboard", component:DashboardComponent},
      {
        path:'signal',
        loadChildren:()=> import('./signalr/signalr.module').then(m=>m.SignalrModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test1RoutingModule { }
