import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TorreService {
    constructor(private http: HttpClient) {}

    POSTJobs(offs: number): Observable<any> {
        const params = new HttpParams()
            .set('size', '6')
            .set('aggregate', 'false')
            .set('offset', offs.toString());
        return this.http.post(
            `https://search.torre.co/opportunities/_search/?${params.toString()}`,
            {},
        );
    }
}
