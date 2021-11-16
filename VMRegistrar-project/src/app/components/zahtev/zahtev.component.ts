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
  public zahtevPreuzet = new Zahtev();
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
    this.zahtevPreuzet.izlazMaticara = false; 
    this.terminIzmena = this.stateService.termin;
    this.stateService.termin = this.terminIzmena;
    this.zahtevPreuzet = this.stateService.zahtev;

  }
  ngOnChanges(): void {
    this.terminIzmena = this.stateService.termin;
    //this.zahtevPreuzet = this.stateService.zahtev;
    
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
        (<HTMLInputElement> document.getElementById("btnPotvrdi")).disabled = false;
        
      }
      
    }
    else{
      this.poruka = "";
      (<HTMLInputElement> document.getElementById("btnPotvrdi")).disabled = false;

    }

  }
  
  add() {
    
    console.log(this.zahtevPreuzet.izlazMaticara);

    this.zahtevService.updateZahtev(this.zahtevPreuzet).subscribe(()  => {
      console.log(this.zahtevPreuzet);
    })

    this.terminService.updateTermin(this.terminIzmena).subscribe(data => {
      console.log(this.terminIzmena);
    })

    this.router.navigate(['/zavrsnaStranica']);
  }

}
