import { Injectable } from '@angular/core';
import { RequestOptions, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor (private http: Http) {}

  get(endpoint: string, urlParams?: any): Observable<any> {
    let args: RequestOptionsArgs = this.getRequestOptionArgs();
    args.params = urlParams;
    return this.http.get(
      this.buildUrl(endpoint),
      args
    ).map(this.mapJson).catch(this.handleError);
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(
      this.buildUrl(endpoint),
      JSON.stringify(data),
      this.getRequestOptionArgs()
    ).map(this.mapJson).catch(this.handleError);
  }

  put(endpoint: string, data: any): Observable<any> {
    return this.http.put(
      this.buildUrl(endpoint),
      JSON.stringify(data),
      this.getRequestOptionArgs()
    ).map(this.mapJson).catch(this.handleError);
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(
      this.buildUrl(endpoint),
      this.getRequestOptionArgs()
    ).map(this.mapJson).catch(this.handleError);
  }

  private buildUrl(endpoint: string) {
    return 'https://jsonplaceholder.typicode.com/' + endpoint;
  }

  private getRequestOptionArgs() : RequestOptionsArgs {
    let options = new RequestOptions();
    options.headers = options.headers || new Headers();
    options.headers.append('Content-Type', 'application/json');

    return options;
  }

  private mapJson(response: Response) : any {
    return response.json();
  }

  private handleError(error: Response | any) {
    if ( ! (error instanceof Response) || error.status >= 500) {
      return Observable.throw('Wystąpił błąd :( Proszę spróbować ponownie.');
    }

    return Observable.throw(error);
  }
}
