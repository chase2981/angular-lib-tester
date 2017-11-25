import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export declare class CompilerService {
    private http;
    constructor(http: Http);
    get(): (url: string, options?: RequestOptionsArgs) => Observable<Response>;
}
