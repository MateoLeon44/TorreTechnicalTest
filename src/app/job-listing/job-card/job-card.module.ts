import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobCardComponent } from './job-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [JobCardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDividerModule
    ],
})
export class JobCardModule { }
