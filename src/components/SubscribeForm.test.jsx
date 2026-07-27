import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
//TEST DE FORMULARIO 
describe('Formulario de Registro (Subscribe Form)', () => {
  const renderForm = () => {
    return render(
      <div className="subscribe-box-mobile">
        <h2 className="subscribe-title-mobile">Registrarse</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Barev@Armenia.com"
            className="subscribe-input-mobile"
            defaultValue=""
          />
          <button type="submit" className="subscribe-btn-mobile">
            Enviar
          </button>
        </form>
      </div>
    );
  };

  test('debe permitir al usuario escribir su email correctamente', async () => {
    renderForm();

    const emailInput = screen.getByPlaceholderText('Barev@Armenia.com');
    expect(emailInput.value).toBe('');

    await userEvent.type(emailInput, 'test@kitchen.com');
    expect(emailInput.value).toBe('test@kitchen.com');
  });

  test('debe renderizar el botón de Enviar', () => {
    renderForm();
    
 
    const submitButton = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'button' && content.trim() === 'Enviar';
    });
    
    expect(submitButton).toBeDefined();
  });
});
