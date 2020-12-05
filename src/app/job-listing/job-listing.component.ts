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

    constructor(
        private torreService: TorreService,
        private snackbar: MatSnackbarService,
    ) {
        this.jobs = [];
    }

    getFirstJobs(): void {
        this.torreService.POSTJobs(0).subscribe(
            (jobs) => {
                this.snackbar.openError('Got job listings');
                this.jobs = jobs.results;
            },
            (err) => {
                this.snackbar.openError('Error obtaining job listings');
                console.log('error');
            },
        );
    }

    ngOnInit(): void {
        this.getFirstJobs();
    }
}
