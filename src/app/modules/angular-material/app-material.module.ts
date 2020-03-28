import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule,
  MatInputModule
} from '@angular/material'


@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
