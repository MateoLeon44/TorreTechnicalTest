import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TorreService {
    constructor(private http: HttpClient) {}

    POSTJobs(offset: number): Observable<any> {
        return this.http.post(
            'https://search.torre.co/opportunities/_search/',
            {
                params: {
                    size: 6,
                    aggregate: false,
                    offset,
                },
            },
        );
    }
}
