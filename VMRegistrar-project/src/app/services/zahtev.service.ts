import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZAHTEV_URL } from '../app.constants';
import { Zahtev } from '../models/zahtev';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {

  constructor(private httpClient: HttpClient) { }

  public addZahtev(zahtev: Zahtev) : Observable<any> {
    zahtev.id = 0;
    return this.httpClient.post(`${ZAHTEV_URL}`, zahtev);
  }
  public updateZahtev(zahtev: Zahtev) : Observable<any> {
    return this.httpClient.put(`${ZAHTEV_URL}`, zahtev);
  }
}
