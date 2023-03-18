import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent, MedicosComponent, MedicoComponent, HospitalComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
