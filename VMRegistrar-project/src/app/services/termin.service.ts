import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TERMIN_URL } from '../app.constants';
import { Termin } from '../models/termin';

@Injectable({
  providedIn: 'root'
})
export class TerminService {

  constructor(private httpClient: HttpClient) { }

  public addTermin(termin: Termin) : Observable<any> {
    termin.id = 0;
    return this.httpClient.post(`${TERMIN_URL}`, termin);
  }
  public updateTermin(termin: Termin) : Observable<any> {
    return this.httpClient.put(`${TERMIN_URL}`, termin);
  }

}
