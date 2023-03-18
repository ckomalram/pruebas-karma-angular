import { FormLogin } from './form';
import { FormGroup, FormBuilder , Validators} from "@angular/forms";


describe('Formularios', () => {

  let componente: FormLogin;

  beforeEach(() => {
    componente = new FormLogin( new FormBuilder() );
  });

  it('Crear un formulario con 2 campos, email y password', () => {
    expect(componente.form.contains('email')).toBeTrue();

  });

  it('Email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });

  it('Email debe ser correo valido', () => {
    const control = componente.form.get('email');
    control?.setValue('glaw14@gmail.com');

    expect(control?.valid).toBeTruthy();
  });

});
