import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico component', () => {
  //definicion de variables
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    });
    // .compileComponents();
  });

  beforeEach(() => {
    //fixture para tener acceso al DOM y html
    fixture = TestBed.createComponent(MedicoComponent);

    //instanciando componente
    component = fixture.componentInstance;

    // fixture.detectChanges();
  });

  it('Se debe crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('Retornar nombre del medico', () => {
    const nombre = 'Carlyle';

    const rta = component.saludarMedico(nombre);

    expect(rta).toContain(nombre);
  });
});
