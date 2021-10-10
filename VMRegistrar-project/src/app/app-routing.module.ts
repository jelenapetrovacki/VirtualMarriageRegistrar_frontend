import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpstinaComponent } from './components/opstina/opstina.component';
import { SupruzniciComponent } from './components/supruznici/supruznici.component';
import { ZahtevComponent } from './components/zahtev/zahtev.component';


const routes: Routes = [
  {path: 'pocetna', component: OpstinaComponent},
  {path: 'supruznici', component: SupruzniciComponent},
  {path: 'zahtev', component: ZahtevComponent}
 // {path: '', redirectTo: '/pocetna', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
