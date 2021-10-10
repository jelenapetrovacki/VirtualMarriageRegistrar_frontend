import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ispis } from 'src/app/models/ispis.model';
import { Muz } from 'src/app/models/muz';
import { Unos } from 'src/app/models/unos.model';
import { Zena } from 'src/app/models/zena';
import { MuzService } from 'src/app/services/muz.service';
import { ZenaService } from 'src/app/services/zena.service';



@Component({
  selector: 'app-supruznici',
  templateUrl: './supruznici.component.html',
  styleUrls: ['./supruznici.component.css', './nicepage.css']
})
export class SupruzniciComponent implements OnInit {

  public muzNovi = new Muz();
  public zenaNova = new Zena();

  //Unos!: Unos;
  ispis!: Ispis;
  greska: string = "";
  potvrda: string = "";
  
  constructor(public muzService: MuzService,
    public zenaService: ZenaService,
    public router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.jmbgProvera(new Unos(this.zenaNova.ime, this.zenaNova.prz, this.zenaNova.jmbg));
    this.jmbgProvera(new Unos(this.muzNovi.ime, this.muzNovi.prz, this.muzNovi.jmbg));
    
    this.muzService.addMuz(this.muzNovi).subscribe(()  => {
      console.log("proba Muz");
      this.zenaService.addZena(this.zenaNova).subscribe(()  => {
        console.log("proba Zena");
      })
    })
    
    this.router.navigate(['/zahtev']);
    
  }

  jmbgProvera(Unos: Unos) {
    this.greska="";
    
    console.log(Unos);
    this.ispis = new Ispis("", "", "", "", 0, "", "","");
    let a = Unos.jmbg.substring(0, 1);
    let b = Unos.jmbg.substring(1, 2);
    let c = Unos.jmbg.substring(2, 3);
    let d = Unos.jmbg.substring(3, 4);
    let e = Unos.jmbg.substring(4, 5);
    let f = Unos.jmbg.substring(5, 6);
    let h = Unos.jmbg.substring(6, 7);
    let i = Unos.jmbg.substring(7, 8);
    let j = Unos.jmbg.substring(8, 9);
    let k = Unos.jmbg.substring(9, 10);
    let l = Unos.jmbg.substring(10, 11);
    let m = Unos.jmbg.substring(11, 12);
    let n = Unos.jmbg.substring(12, 13);
    let godina;
    let polBeba;
    this.potvrda = "potvrdjeno";
    if (e != '0')
      godina = '1' + e + f + h;
    else
      godina = '2' + e + f + h;




    this.ispis.kontrolnaCifra = 11 - ((7 * (parseInt(a) + parseInt(h)) + 6 * (parseInt(b) + parseInt(i)) + 5 * (parseInt(c) + parseInt(j)) + 4 * (parseInt(d) + parseInt(k)) + 3 * (parseInt(e) + parseInt(l)) + 2 * (parseInt(f) + parseInt(m))) % 11);
    if (this.ispis.kontrolnaCifra > 9) 
      this.ispis.kontrolnaCifra = 0
    if (this.proveraDatuma(a + b, c + d, godina) == "") {
      if (this.proveraRegiona(parseInt(i + j)) == "") {
        if (this.ispis.kontrolnaCifra == parseInt(n)) {




          polBeba = k + l + m;
          if (polBeba >= "0" && polBeba < "500") {
            let pol = parseInt(polBeba);
            pol += 1;
            this.ispis.pol = 'Osoba je muškog pola';
            this.ispis.brojBebe = pol.toString();
          }
          else if (polBeba >= "500" && polBeba < "999") {
            //polBeba -= 499;
            this.ispis.pol = 'Osoba je ženskog pola';
            this.ispis.brojBebe = polBeba;
          }

        } else {
          this.greska = 'Neispravan JMBG, kontrolna cifra nije odgovarajuća.';
        }

      }

    }
  }

  proveraRegiona(region: number) {
    if (region == 1) {
      this.ispis.regija = "stranci u BIH";
    }
    else if (region == 2) {
      this.ispis.regija = "stranci u CG";
    }
    else if (region == 3) {
      this.ispis.regija = "stranci u Hrvatskoj";
    }
    else if (region == 4) {
      this.ispis.regija = "stranci u Makedoniji";
    }
    else if (region == 5) {
      this.ispis.regija = "stranci u Sloveniji";
    }
    else if (region == 7) {
      this.ispis.regija = "stranci u Srbiji";
    }
    else if (region == 8) {
      this.ispis.regija = "stranci u Vojvodini";
    }
    else if (region == 9) {
      this.ispis.regija = "stranci u KiM";
    }
    else if (region == 10) {
      this.ispis.regija = "Banjaluka";
    }
    else if (region == 11) {
      this.ispis.regija = "Bihac";
    }
    else if (region == 12) {
      this.ispis.regija = " Doboj";
    }
    else if (region == 13) {
      this.ispis.regija = " Gorazde";
    }
    else if (region == 14) {
      this.ispis.regija = "Livno";
    }
    else if (region == 15) {
      this.ispis.regija = "Mostar";
    }
    else if (region == 16) {
      this.ispis.regija = "Prijedor";
    }
    else if (region == 17) {
      this.ispis.regija = "Sarajevo";
    }
    else if (region == 18) {
      this.ispis.regija = "Tuzla";
    }
    else if (region == 19) {
      this.ispis.regija = "Zenica";
    }
    else if (region == 21) {
      this.ispis.regija = "Podgorica";
    }
    else if (region == 26) {
      this.ispis.regija = " Niksic";
    }
    else if (region == 30) {
      this.ispis.regija = " Osijek";
    }
    else if (region == 31) {
      this.ispis.regija = " Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region";
    }
    else if (region == 32) {
      this.ispis.regija = " Varazdin";
    }
    else if (region == 33) {
      this.ispis.regija = " Zagreb";
    }
    else if (region == 34) {
      this.ispis.regija = " Karlovac";
    }
    else if (region == 35) {
      this.ispis.regija = " Gospic";
    }
    else if (region == 36) {
      this.ispis.regija = "Rijeka, Pula, Istra, Primorje region";
    }
    else if (region == 37) {
      this.ispis.regija = "Sisak";
    }
    else if (region == 38) {
      this.ispis.regija = "Split, Zadar, Dubrovnik, Dalmacija region";
    }
    else if (region == 39) {
      this.ispis.regija = " ostalo";
    }
    else if (region == 41) {
      this.ispis.regija = " Bitola";
    }
    else if (region == 42) {
      this.ispis.regija = " Kumanovo";
    }
    else if (region == 43) {
      this.ispis.regija = " Ohrid";
    }
    else if (region == 45) {
      this.ispis.regija = " Skoplje";
    }
    else if (region == 46) {
      this.ispis.regija = " Strumica";
    }
    else if (region == 47) {
      this.ispis.regija = " Tetovo";
    }
    else if (region == 48) {
      this.ispis.regija = " Veles";
    }
    else if (region == 49) {
      this.ispis.regija = " Stip";
    }
    else if (region == 71) {
      this.ispis.regija = " Gorazde";
    }
    else if (region == 72) {
      this.ispis.regija = " Sumadija";
    }
    else if (region == 73) {
      this.ispis.regija = " Nis";
    }
    else if (region == 74) {
      this.ispis.regija = "Juzna Morava";
    }
    else if (region == 75) {
      this.ispis.regija = " Zajecar";
    }
    else if (region == 76) {
      this.ispis.regija = " Podunavlje";
    }
    else if (region == 77) {
      this.ispis.regija = "Podrinje i Kolubara";
    }
    else if (region == 78) {
      this.ispis.regija = " Kraljevo";
    }
    else if (region == 79) {
      this.ispis.regija = " Uzice";
    }
    else if (region == 80) {
      this.ispis.regija = "Novi Sad";
    }
    else if (region == 81) {
      this.ispis.regija = " Sombor";
    }
    else if (region == 82) {
      this.ispis.regija = " Subotica";
    }
    else if (region == 83) {
      this.ispis.regija = " Vrbas";
    }
    else if (region == 85) {
      this.ispis.regija = " Zrenjanin";
    }
    else if (region == 86) {
      this.ispis.regija = " Pancevo";
    }
    else if (region == 87) {
      this.ispis.regija = " Kikinda";
    }
    else if (region == 88) {
      this.ispis.regija = " Ruma";
    }
    else if (region == 89) {
      this.ispis.regija = "Sremska Mitrovica";
    }
    else if (region == 91) {
      this.ispis.regija = " Pristina";
    }
    else if (region == 92) {
      this.ispis.regija = "Kosovska Mitrovica";
    }
    else if (region == 93) {
      this.ispis.regija = "Pec";
    }
    else if (region == 94) {
      this.ispis.regija = "Djakovica";
    }
    else if (region == 95) {
      this.ispis.regija = "Prizren";
    }
    else if (region == 96) {
      this.ispis.regija = "Kosovsko Pomoravski okrug";
    }

    else {
      this.greska = 'Neispravan JMBG, uneli ste nepostojeći region.';
    }

    return this.greska;

  }

  proveraDatuma(dan: string, mesec: string, godina: string) {

    let prestupna = 0;
    if (parseInt(godina) % 4 == 0) {
      prestupna = 1; //prestupna
      this.ispis.prestupnaG = 'Prestupna godina';
      if (parseInt(godina) % 100 == 0) {
        prestupna = 1; //prestupna
        this.ispis.prestupnaG = 'Prestupna godina';
        if (parseInt(godina) % 400 == 0) {
          prestupna = 1; //prestupna
          this.ispis.prestupnaG = 'Prestupna godina';
        }
      }
    }
    else this.ispis.prestupnaG = 'Godina nije prestupna';

    var today = new Date();
    if(parseInt(godina)> today.getFullYear())
      return this.greska = 'Godina u budućnosti.'

    if (dan == "00" || mesec == "00" || mesec > "12") {
      this.greska = 'Neispravan JMBG, datum nije ispravan.';
      return this.greska;
    }
    if (mesec == "01") {
      if (parseInt(dan) > 31)
        this.greska = 'Neispravan JMBG, januar ima 31 dan.';
      else this.ispis.nazivMeseca = 'Januar'
    }
    else if (mesec == "02" && prestupna == 0) {
      if (parseInt(dan) > 28)
        this.greska = 'Neispravan JMBG, februar ima 28 dana jer nije prestupna godina.';
      else this.ispis.nazivMeseca = 'Februar'
    }
    else if (mesec == "02" && prestupna == 1) {
      if (parseInt(dan) > 29)
        this.greska = 'Neispravan JMBG, februar ima 29 dana.';
      else this.ispis.nazivMeseca = 'Februar'
    }
    else if (mesec == "03") {
      if (parseInt(dan) > 31)
        this.greska = 'Neispravan JMBG, mart ima 31 dan.';
      else this.ispis.nazivMeseca = 'Mart'
    }
    else if (mesec == "04") {
      if (parseInt(dan) > 30)
        this.greska = 'Neispravan JMBG, april ima 30 dana.';
      else this.ispis.nazivMeseca = 'April'
    }
    else if (mesec == "05") {
      if (parseInt(dan) > 31)
        this.greska = 'Neispravan JMBG, maj ima 31 dan.';
      else this.ispis.nazivMeseca = 'Maj'
    }
    else if (mesec == "06") {
      if (parseInt(dan) > 30)
        this.greska = 'Neispravan JMBG, jun ima 30 dana.';
      else this.ispis.nazivMeseca = 'Jun'
    }
    else if (mesec == "07") {
      if (parseInt(dan) > 31)
        this.greska = 'Neispravan JMBG, jul ima 31 dan.';
      else this.ispis.nazivMeseca = 'Jul'
    }
    else if (mesec == "08") {
      if (parseInt(dan) > 31)
        this.greska = 'Neispravan JMBG, avgust ima 31 dan.';
      else this.ispis.nazivMeseca = 'Avgust'
    }
    else if (mesec == "09") {
      if (parseInt(dan) > 30)
        this.greska = 'Neispravan JMBG, septembar ima 30 dana.';
      else this.ispis.nazivMeseca = 'Septembar'
    }
    else if (mesec == "10") {
      if (parseInt(dan) > 31)
        this.greska = 'Neispravan JMBG, oktobar ima 31 dan.';
      else this.ispis.nazivMeseca = 'Oktobar'
    }
    else if (mesec == "11") {
      if (parseInt(dan) > 30)
        this.greska = 'Neispravan JMBG, novembar ima 30 dana.';
      else this.ispis.nazivMeseca = 'Novembar'
    }
    else if (mesec == "12") {
      if (parseInt(dan) > 31)
        this.greska = 'Neispravan JMBG, decembar ima 31 dan.';
      else this.ispis.nazivMeseca = 'Decembar'
    }
    if (this.greska == "") {
      let datum = new Date(godina + '/' + mesec + '/' + dan);
      let englNazivDana = datum.toDateString().substring(0, 3);
      console.log(englNazivDana);
      if (englNazivDana == "Mon")
        this.ispis.nazivDana = 'Ponedeljak'
      else if (englNazivDana == "Tue")
        this.ispis.nazivDana = 'Utorak'
      else if (englNazivDana == "Wed")
        this.ispis.nazivDana = 'Sreda'
      else if (englNazivDana == "Thu")
        this.ispis.nazivDana = 'Četvrtak'
      else if (englNazivDana == "Fri")
        this.ispis.nazivDana = 'Petak'
      else if (englNazivDana == "Sat")
        this.ispis.nazivDana = 'Subota'
      else if (englNazivDana == "Sun")
        this.ispis.nazivDana = 'Nedelja'

      this.ispis.datumRodjenja = dan + '. ' + mesec + '. ' + godina+'.';
    }
    return this.greska;

  }
}
