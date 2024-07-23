import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockManagementComponent } from './stock-management.component';

const routes: Routes = [
  {
    path:'',
    component:StockManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockManagementRoutingModule { }
