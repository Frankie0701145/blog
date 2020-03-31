/**Angular Material Module*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material'


@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class AngularMaterialModule { }
