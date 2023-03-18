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
});
