import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { BestFitComponent } from './best-fit.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [BestFitComponent],
    imports: [
        CommonModule,
        MatIconModule,
        NgxSkeletonLoaderModule,
        MatCardModule,
        MatDividerModule
    ]
})
export class BestFitModule { }
