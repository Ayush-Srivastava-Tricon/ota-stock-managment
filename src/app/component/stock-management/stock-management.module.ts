import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockManagementRoutingModule } from './stock-management-routing.module';
import { StockManagementComponent } from './stock-management.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [StockManagementComponent],
  imports: [
    CommonModule,
    StockManagementRoutingModule,
    FormsModule,
  ],
  exports:[StockManagementComponent]
})
export class StockManagementModule { }
