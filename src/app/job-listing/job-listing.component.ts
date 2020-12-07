import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/localstorage/storage.service';
import { MatSnackbarService } from '../services/mat-snackbar/mat-snackbar.service';
import { TorreService } from '../services/torre/torre.service';

@Component({
    selector: 'app-job-listing',
    templateUrl: './job-listing.component.html',
    styleUrls: ['./job-listing.component.scss'],
    providers: [TorreService, MatSnackbarService, StorageService],
})
export class JobListingComponent implements OnInit {
    jobs: any[];
    offset: number;
    result: any;
    loading: boolean;

    constructor(
        private torreService: TorreService,
        private snackbar: MatSnackbarService,
        private localStorage: StorageService
    ) {
        this.jobs = [];
        this.offset = 0;
        this.loading = true;
    }

    getJobs(): void {
        this.torreService.POSTJobs(this.offset).subscribe(
            (jobs) => {
                this.result = jobs;
                this.jobs = jobs.results;
                this.loading = false;
            },
            (err) => {
                this.snackbar.openError('Error obtaining job listings');
            },
        );
    }

    modifyOffset(num: number): void {
        this.loading = true;
        this.offset += num;
        this.getJobs();
    }

    ngOnInit(): void {
        this.getJobs();
    }
}
