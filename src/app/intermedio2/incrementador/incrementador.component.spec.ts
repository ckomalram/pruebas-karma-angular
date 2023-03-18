import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component- Integracion html', () => {
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

  it('HTML: Detectar cambio del input progreso',  async () => {
    component.cambiarValor(5);

    fixture.detectChanges();
    await fixture.whenStable();
    // fixture.whenStable().then(() => {
    //   const input = fixture.debugElement.query(By.css('input'));

    //   const element = input.nativeElement;
    //   // console.log(element);

    //   expect(element.value).toBe('55');
    // });

    const input = fixture.debugElement.query(By.css('input'));

      const element = input.nativeElement;
      expect(element.value).toBe('55');
  });

  it('HTML: Inc/decrementar en 5 al hacer click a los botones', () => {

    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    // console.log(botones);
    // Js nativo
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);

  });

  it('HTML: Debe mostrar progreso actualizado',async  () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    const element: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    // console.log(botones);
    // Js nativo
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable();


    expect(element.innerHTML).toContain('45');

    botones[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(element.innerHTML).toContain('50');





  });


});
