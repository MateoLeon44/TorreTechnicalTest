import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterService } from './filter/filter.service';
import { LocalService } from './localstorage/local.service';
import { TorreService } from './torre/torre.service';

@Injectable()
export class FacadeService {

  constructor(private torreService: TorreService,
    private filterService: FilterService,
    private localService: LocalService) { }

  POSTJobs(offs: number): Observable<any> {
    return this.torreService.POSTJobs(offs);
  }

  getResults(job: any, skills: Array<string>): Observable<any> {
    return this.filterService.getResults(job, skills);
  }

  getBestFit(job: any, skills: Array<string>): Observable<any> {
    return this.filterService.getBestFit(job, skills);
  }

  setJsonValue(key: string, value: any) {
    return this.localService.setJsonValue(key, value);
  }

  getJsonValue(key: string) {
    return this.localService.getJsonValue(key);
  }

  clearToken() {
    return this.localService.clearToken();
  }
}