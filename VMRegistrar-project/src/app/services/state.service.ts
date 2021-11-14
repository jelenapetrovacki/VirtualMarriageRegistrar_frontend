import { Injectable } from '@angular/core';
import { Muz } from '../models/muz';
import { Termin } from '../models/termin';
import { Zahtev } from '../models/zahtev';
import { Zena } from '../models/zena';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public termin!: Termin;
  public muz!: Muz;
  public zena!: Zena;
  public zahtev! : Zahtev;
  constructor() { }
}
