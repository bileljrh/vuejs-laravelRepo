import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes ,RouterModule } from '@angular/router'
import {AdminComponent} from './admin/admin.component'
import {UserComponent} from './user/user.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent}  from './register/register.component'
const routes: Routes =[
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'login',
    component:AdminComponent
  },
  {
    path:'register',
    component:AdminComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule,
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
