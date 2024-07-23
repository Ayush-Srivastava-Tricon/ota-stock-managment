import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
      },
      {
        path:'login',
        loadChildren:()=>import("./component/auth/login/login.module").then(m=>m.LoginModule)
      },
    ],
  },
    {
      path:'signup',
      loadChildren:()=>import("./component/auth/signup/signup.module").then(m=>m.SignupModule)
    },
    {
      path:'network_setting',
      loadChildren:()=>import("./component/channel-manager/channel-manager.module").then(m=>m.NetworkSettingModule)
    },
    {
      path:'stock_management',
      loadChildren:()=>import("./component/stock-management/stock-management.module").then(m=>m.StockManagementModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
