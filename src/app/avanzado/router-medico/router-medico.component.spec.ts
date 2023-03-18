import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

class Fakerouter {
  navigate(params: any) {
    console.log(params);
  }
}

class Fakeactivatedroute {
  params: Observable<any> = EMPTY;
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [{ provide: Router, useClass: Fakerouter },{ provide: ActivatedRoute, useClass: Fakeactivatedroute } ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Redireccionar a medico cuando se guarde.', inject([Router], (router: Router)  => {
    // const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    // console.log(spy);

    expect(spy).toHaveBeenCalledWith(['medico', '123'])
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
