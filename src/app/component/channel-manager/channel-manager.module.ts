import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkSettingRoutingModule } from './channel-manager-routing.module';
import { NetworkSettingComponent } from './channel-manager.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NetworkSettingComponent],
  imports: [
    CommonModule,
    NetworkSettingRoutingModule,
    FormsModule
  ],
  exports:[NetworkSettingComponent]
})
export class NetworkSettingModule { }
