import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CineComponent } from './cine.component';


@NgModule({
  declarations: [
    CineComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CineComponent
  ]
})
export class CineModule { }
