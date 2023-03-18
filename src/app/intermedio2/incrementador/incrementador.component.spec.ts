import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('HTML: Debe mostrar Leyenda', () => {
    component.leyenda = 'Carlyle Komalram';

    // Para disparar detección de cambios de angular
    fixture.detectChanges();

    //con query se extrae el primero que se encuentre en el html
    //fixture es el elemento compilado de angular
    const element: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(element.innerHTML).toContain('Carlyle Komalram');
  });
});
