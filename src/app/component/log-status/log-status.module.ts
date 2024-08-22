import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogStatusRoutingModule } from './log-status-routing.module';
import { LogStatusComponent } from './log-status.component';


@NgModule({
  declarations: [LogStatusComponent],
  imports: [
    CommonModule,
    LogStatusRoutingModule
  ],
  exports:[LogStatusComponent]
})
export class LogStatusModule { }
