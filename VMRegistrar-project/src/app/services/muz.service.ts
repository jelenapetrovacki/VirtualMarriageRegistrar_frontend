import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MUZ_URL } from '../app.constants';
import { Muz } from '../models/muz';

@Injectable({
  providedIn: 'root'
})
export class MuzService {

  constructor(private httpClient: HttpClient) { }

  public addMuz(muz: Muz) : Observable<any> {
    muz.id = 0;
    return this.httpClient.post(`${MUZ_URL}`, muz);
  }
}
