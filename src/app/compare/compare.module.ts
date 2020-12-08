import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FitsComponent } from './fits/fits.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BestFitComponent } from './best-fit/best-fit.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [CompareComponent, FitsComponent, BestFitComponent],
  imports: [
    CommonModule,
    CompareRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgxSkeletonLoaderModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class CompareModule { }
