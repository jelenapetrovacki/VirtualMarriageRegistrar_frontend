import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Termin } from 'src/app/models/termin';
import { Zahtev } from 'src/app/models/zahtev';
import { TerminService } from 'src/app/services/termin.service';
import { ZahtevService } from 'src/app/services/zahtev.service';

@Component({
  selector: 'app-zahtev',
  templateUrl: './zahtev.component.html',
  styleUrls: ['./zahtev.component.css', './nicepage.css']
})
export class ZahtevComponent implements OnInit {

  public terminIzmena = new Termin();
  public zahtevNovi = new Zahtev();
  public dan!: string;
  public mesec!: string;
  public godina!: string;

  constructor(public terminService: TerminService,
    public zahtevService: ZahtevService,
    public router: Router) { }

  ngOnInit(): void {
  }

  proveraRaspolozivosti() {

  }
  
  add() {
    this.terminIzmena.datum = this.dan + '.' + this.mesec + '.' + this.godina + '.';
    this.zahtevService.addZahtev(this.zahtevNovi).subscribe(()  => {
      console.log("proba");
    })
    this.terminService.updateTermin(this.terminIzmena).subscribe(()  => {
      console.log("proba");
    })
  }

}
