import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsApiService {

  constructor(private http: HttpClient) { }

  public getGoods(): Observable<any> {
    return this.http.get(environment.apiUrl)
      .pipe(map((response: Array<{[key: string]: any}>) =>
      response.map(resItem => ({title: resItem.title, url: resItem.media[0].url}))
    ));
  }
}
