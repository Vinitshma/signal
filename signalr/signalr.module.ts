import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalrRoutingModule } from './signalr-routing.module';
import { CalllistComponent } from './calllist/calllist.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CalllistComponent
  ],
  imports: [
    CommonModule,
    SignalrRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SignalrModule { }
