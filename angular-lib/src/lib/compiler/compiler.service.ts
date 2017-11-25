import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompilerService {
  constructor(private http: Http){

  }

  get(){
    return this.http.get;
  }
}
