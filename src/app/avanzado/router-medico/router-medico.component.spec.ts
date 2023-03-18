import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

class Fakerouter {
  navigate(params: any) {
    console.log(params);
  }
}

class Fakeactivatedroute {
  // params: Observable<any> = EMPTY;

  private subject = new Subject();

  push(valor: any) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: Fakerouter },
        { provide: ActivatedRoute, useClass: Fakeactivatedroute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Redireccionar a medico cuando se guarde.', inject(
    [Router],
    (router: Router) => {
      // const router = TestBed.get(Router);
      const spy = spyOn(router, 'navigate');

      component.guardarMedico();

      // console.log(spy);

      expect(spy).toHaveBeenCalledWith(['medico', '123']);
    }
  ));


  //se utiliza la función inject para obtener una instancia de ActivatedRoute y se inyecta como un parámetro en la función de prueba. Luego, se utiliza la función fakeAsync para ejecutar la prueba de forma sincrónica con el uso de tick para simular la resolución de la promesa de ActivatedRoute. Finalmente, se comprueba que el valor de component.id es 'nuevo'.
  it('ID = nuevo', fakeAsync(inject([ActivatedRoute], (activatedRoute: Fakeactivatedroute) => {
    activatedRoute.push({id: 'nuevo'});
    tick();
    expect(component.id).toBe('nuevo');
  })));

  // it('ID = nuevo', () => {

  //   const activatedroute: Fakeactivatedroute = TestBed.get(ActivatedRoute);

  //   activatedroute.push({id: 'nuevo'});

  //   expect(component.id).toBe('nuevo')

  // });
});
