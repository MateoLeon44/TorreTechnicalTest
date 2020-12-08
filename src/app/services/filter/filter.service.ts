import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable()
export class FilterService {

  constructor(private http: HttpClient) {

  }

  getResults(job: any, skills: Array<string>): Observable<any> {
    console.log(environment.apiUrl);
    const body = { job, filters: skills }
    return this.http.post(`${environment.apiUrl}/people/search-fit`, body);
  }

}