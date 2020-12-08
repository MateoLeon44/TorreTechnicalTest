import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { FitsComponent } from './fits.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [FitsComponent],
    imports: [
        CommonModule,
        MatIconModule,
        NgxSkeletonLoaderModule,
        MatCardModule,
        MatDividerModule
    ]
})
export class FitsModule { }
