import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      imports:[
        RouterTestingModule.withRoutes([])
      ],
      schemas:[
        NO_ERRORS_SCHEMA
      ]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas-angular');
  });

  it('Debe tener un router outler', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });


  //SKIPPED
  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pruebas-angular app is running!');
  });
});
