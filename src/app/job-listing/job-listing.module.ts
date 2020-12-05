import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListingRoutingModule } from './job-listing-routing.module';
import { JobListingComponent } from './job-listing.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [JobListingComponent],
    imports: [
        CommonModule,
        JobListingRoutingModule,
        MatCardModule,
        MatProgressSpinnerModule,
    ],
})
export class JobListingModule {}
