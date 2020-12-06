import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [CompareComponent],
  imports: [
    CommonModule,
    CompareRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class CompareModule { }
