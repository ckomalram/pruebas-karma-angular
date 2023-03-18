import { MedicosComponent } from './medicos.component';

import { MedicosService } from './medicos.service';
import { from } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;

  // Crear el spía http
  const spy = jasmine.createSpyObj('http', ['get','post', 'delete']);

  const servicio = new MedicosService(spy);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('ngOninit debe cargar los medicos', () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([['medico1', 'medico2', 'medico3']]);
    });

    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });
});
