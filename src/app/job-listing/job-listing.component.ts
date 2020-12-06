import { Component, OnInit } from '@angular/core';
import { MatSnackbarService } from '../services/mat-snackbar/mat-snackbar.service';
import { TorreService } from '../services/torre/torre.service';

@Component({
    selector: 'app-job-listing',
    templateUrl: './job-listing.component.html',
    styleUrls: ['./job-listing.component.scss'],
    providers: [TorreService, MatSnackbarService],
})
export class JobListingComponent implements OnInit {
    jobs: any[];
    offset: number;
    result: any;

    constructor(
        private torreService: TorreService,
        private snackbar: MatSnackbarService,
    ) {
        this.jobs = [];
        this.offset = 0;
    }

    getFirstJobs(): void {
        this.getJobs();
    }

    getJobs(): void {
        this.torreService.POSTJobs(this.offset).subscribe(
            (jobs) => {
                this.result = jobs;
                this.jobs = jobs.results;
            },
            (err) => {
                this.snackbar.openError('Error obtaining job listings');
            },
        );
    }

    ngOnInit(): void {
        this.getFirstJobs();
    }
}
