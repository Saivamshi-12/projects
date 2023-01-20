import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './grid/add/add.component';
import { DialogComponent } from './grid/dialog/dialog.component';
import { EditComponent } from './grid/edit/edit.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
   
    path:'', component:LoginComponent
},   {
  path:'grid', component:GridComponent
},
{
  path:'add', component:AddComponent
},
{
  path:'edit', component:EditComponent
},{
  path:'dialog',component:DialogComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
