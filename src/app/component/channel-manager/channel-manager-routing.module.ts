import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkSettingComponent } from './channel-manager.component';

const routes: Routes = [
  {
    path:'',
    component:NetworkSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkSettingRoutingModule { }
