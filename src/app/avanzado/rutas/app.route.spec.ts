import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';
import { RUTAS } from './app.route';

describe('Rutas Principales', () => {
  it('Debe existir ruta medico/:id', () => {
    expect(RUTAS).toContain({
      path: 'medico/:id',
      component: MedicoComponent,
    });
  });
});
