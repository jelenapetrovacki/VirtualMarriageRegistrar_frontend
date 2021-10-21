import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Termin } from 'src/app/models/termin';
import { Zahtev } from 'src/app/models/zahtev';
import { StateService } from 'src/app/services/state.service';
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
    public router: Router,
    private stateService: StateService) { }

  ngOnInit(): void {
    this.terminIzmena = this.stateService.termin;
  }

  proveraRaspolozivosti() {

  }
  
  add() {
    this.terminIzmena.datum = this.dan + '.' + this.mesec + '.' + this.godina + '.';
    // Provera da li je unet datum posle danasnjeg dana 
    this.zahtevService.addZahtev(this.zahtevNovi).subscribe(()  => {
      console.log("proba");
    })

    this.terminService.updateTermin(this.terminIzmena).subscribe(data => {
      console.log(this.terminIzmena);
    })
  }

}
