import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsApiService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getGoods(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(map((response: {[key: string]: any}[]) =>
      response.map(obj => ({title: obj.title, url: obj.media[0].url}))
    ));
  }
}
