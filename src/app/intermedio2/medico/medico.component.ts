import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  constructor(public medicoServices: MedicoService) {}

  medicos: any[] = [];
  ngOnInit(): void {}

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedico() {
    this.medicoServices
      .getMedicos()
      .subscribe((resp: any) => (this.medicos = resp));
  }
}
