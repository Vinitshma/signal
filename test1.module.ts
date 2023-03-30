import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Test1RoutingModule } from './test1-routing.module';
import { HomesComponent } from './homes/homes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './homes/model/model.component';
import { GridsComponent } from './homes/grids/grids.component';
import { SearchPipe } from './homes/search/search.pipe';

@NgModule({
  declarations: [
    HomesComponent,
    NavbarComponent,
    SidenavComponent,
    DefaultComponent,
    DashboardComponent,
    ModelComponent,
    GridsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    Test1RoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class Test1Module { }
