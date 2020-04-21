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
  MatProgressSpinnerModule,
  MatSnackBarModule
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
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
