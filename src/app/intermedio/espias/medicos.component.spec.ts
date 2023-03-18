import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

import { from, EMPTY, throwError, of } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;

  // Crear el spía http
  const spy = jasmine.createSpyObj('http', ['get', 'post', 'delete']);

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

  it('Llamar servicio para agregar medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return EMPTY;
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Agregar un nuevo medico al arreglo', () => {
    const medico = { id: 1, name: 'Carlyle' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla adición, mensaje error debe ser igual al error del serivicio', () => {
    const customError = 'No se pudo agregar';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(customError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(customError);
  });

  it('delete: Llamar a servidor para borrar medico', () => {

    // para aceptar pantalla emergente de confirmar borrar.
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });

  it('delete: No Llamar a servidor para borrar medico', () => {

    // para aceptar pantalla emergente de confirmar borrar.
    spyOn(window, 'confirm').and.returnValue(false);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
