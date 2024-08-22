import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogStatusComponent } from './log-status.component';

const routes: Routes = [
  {
    path:'',
    component:LogStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogStatusRoutingModule { }
