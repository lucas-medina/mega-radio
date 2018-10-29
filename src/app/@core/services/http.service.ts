import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  get<T>(_url: string): Observable<T> {
    return this._httpClient.get<T>(_url);
  }

  post<T>(_url: string, _request: any): Observable<T> {
    return this._httpClient.post<T>(_url, _request);
  }

}
