import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListingRoutingModule } from './job-listing-routing.module';
import { JobListingComponent } from './job-listing.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobCardComponent } from './job-card/job-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
    declarations: [JobListingComponent, JobCardComponent],
    imports: [
        CommonModule,
        JobListingRoutingModule,
        MatCardModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDividerModule
    ],
})
export class JobListingModule {}
