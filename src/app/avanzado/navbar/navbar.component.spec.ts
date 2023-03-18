import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe tener un link a pagina de medicos', () => {

    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    console.log(elementos);
    let existe = false;
    elementos.forEach(element => {
      if (element.attributes['routerLink'] === '/medicos') {
        existe = true;
      }
    });


    expect(existe).toBeTruthy();
  });
});
