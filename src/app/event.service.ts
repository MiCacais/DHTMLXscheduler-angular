import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventService {

    private _Url = './assets/json/';

    constructor(private http: Http) {
        var obj;
    }

    handleError(error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }    

    getURL(url: string): string {
        return this._Url + url;
    }

    get(endpoint: string): Observable<any> {
        let url = this.getURL(endpoint);
        return this.http.get(url)
            .map((res:any) => res.json())
            .catch(this.handleError);
    }

}