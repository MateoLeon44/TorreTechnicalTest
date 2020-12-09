import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/localstorage/local.service';
import { StorageService } from 'src/app/services/localstorage/storage.service';
import { FacadeService } from 'src/app/services/service-facade.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  providers: [StorageService, FacadeService]
})
export class JobCardComponent implements OnInit {
  @Input() job: any;

  constructor(private router: Router, private local: LocalService, private facadeService: FacadeService) {
  }

  ngOnInit(): void {
  }

  goToCompare(): void {
    this.facadeService.setJsonValue('job', this.job);
    this.router.navigate(['compare']);
  }

}
