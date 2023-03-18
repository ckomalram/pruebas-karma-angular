import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('Medico component', () => {
  //definicion de variables
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoComponent]
    })
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
});
