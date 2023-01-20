import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
import { AddComponent } from './grid/add/add.component';
import { EditComponent } from './grid/edit/edit.component';
import {MatTableModule} from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './grid/dialog/dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GridComponent,
    AddComponent,
    EditComponent,
    DialogComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    MatDialogModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
