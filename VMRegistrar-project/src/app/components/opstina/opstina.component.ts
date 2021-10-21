import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Termin } from 'src/app/models/termin';
import { StateService } from 'src/app/services/state.service';
import { TerminService } from 'src/app/services/termin.service';

@Component({
  selector: 'app-opstina',
  templateUrl: './opstina.component.html',
  styleUrls: ['./opstina.component.css', './nicepage.css' ]
})
export class OpstinaComponent implements OnInit {

  public terminNovi = new Termin();

  constructor( public terminService: TerminService,
    public router: Router,
    private stateService: StateService) { }

  ngOnInit(): void {
  }

  add() {
    this.terminService.addTermin(this.terminNovi).subscribe(data  => {
      console.log(data);
      this.stateService.termin = data;
      console.log("proba 2 " +  this.stateService.termin);
      this.router.navigate(['/supruznici']);
    });
    
  }

}
