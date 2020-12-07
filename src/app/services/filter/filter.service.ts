import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FilterService {
  
  constructor(private http: HttpClient) { 

  }

  getResults(job:any, filters:Array<string>): Observable<any> {
    
  }

}