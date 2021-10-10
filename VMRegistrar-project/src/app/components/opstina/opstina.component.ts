import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Termin } from 'src/app/models/termin';
import { TerminService } from 'src/app/services/termin.service';

@Component({
  selector: 'app-opstina',
  templateUrl: './opstina.component.html',
  styleUrls: ['./opstina.component.css', './nicepage.css' ]
})
export class OpstinaComponent implements OnInit {

  public terminNovi = new Termin();

  constructor( public terminService: TerminService,
    public router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.terminService.addTermin(this.terminNovi).subscribe(()  => {
      console.log("proba");
    })
    this.router.navigate(['/supruznici']);
  }

}
