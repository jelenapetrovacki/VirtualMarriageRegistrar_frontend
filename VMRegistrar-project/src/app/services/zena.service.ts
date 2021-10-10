import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZENA_URL } from '../app.constants';
import { Zena } from '../models/zena';

@Injectable({
  providedIn: 'root'
})
export class ZenaService {

  constructor(private httpClient: HttpClient) { }

  public addZena(zena: Zena) : Observable<any> {
    zena.id = 0;
    return this.httpClient.post(`${ZENA_URL}`, zena);
  }
}
