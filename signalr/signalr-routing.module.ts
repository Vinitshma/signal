import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalllistComponent } from './calllist/calllist.component';

const routes: Routes = [
  {path:'', component:CalllistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalrRoutingModule { }
