import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes ,RouterModule } from '@angular/router'
import {AdminComponent} from './admin/admin.component'
import {UserComponent} from './user/user.component'

const routes: Routes =[
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ]
})
export class AppRoutingModule { }
