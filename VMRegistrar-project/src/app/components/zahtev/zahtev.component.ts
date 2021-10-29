import { Component, OnChanges, OnInit } from '@angular/core';
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
export class ZahtevComponent implements OnInit, OnChanges {

  public terminIzmena = new Termin();
  public zahtevNovi = new Zahtev();
  public dan!: string;
  public mesec!: string;
  public godina!: string;
  public poruka!: string;



  constructor(public terminService: TerminService,
    public zahtevService: ZahtevService,
    public router: Router,
    private stateService: StateService
    ) { }

  ngOnInit(): void {
    this.terminIzmena = this.stateService.termin;
    this.stateService.termin = this.terminIzmena;
  }
  ngOnChanges(): void {
    this.terminIzmena = this.stateService.termin;
    
  }
  proveraRaspolozivosti() {
    this.terminIzmena.datum = this.dan + '.' + this.mesec + '.' + this.godina + '.';
    // Provera da li je unet datum posle danasnjeg dana 
    const d = new Date();
    if(parseInt(this.godina) <= d.getFullYear()) {
      if(parseInt(this.mesec) < d.getMonth()) {
        this.poruka = "Greška! Uneli ste neispravan datum!";
      }else if(parseInt(this.mesec) == d.getMonth() && parseInt(this.dan) <= d.getDate()){
        this.poruka = "Greška! Uneli ste neispravan datum!";
      }else {
        this.poruka = "";
        
        
      }
      
    }
    else{
      this.poruka = "";
    }
    console.log(this.godina + d.getFullYear());
    console.log(this.mesec + d.getMonth());
    console.log(this.dan + d.getDate());
  console.log(this.poruka);
  }
  
  add() {
    
    
    this.zahtevService.addZahtev(this.zahtevNovi).subscribe(()  => {
      console.log("proba");
    })

    this.terminService.updateTermin(this.terminIzmena).subscribe(data => {
      console.log(this.terminIzmena);
    })
  }

}
