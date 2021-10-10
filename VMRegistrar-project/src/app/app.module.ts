import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahtevComponent } from './components/zahtev/zahtev.component';
import { OpstinaComponent } from './components/opstina/opstina.component';
import { SupruzniciComponent } from './components/supruznici/supruznici.component';

@NgModule({
  declarations: [
    AppComponent,
    ZahtevComponent,
    OpstinaComponent,
    SupruzniciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
