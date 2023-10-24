import { render, screen } from '@testing-library/react';
import Formulario from './Formulario';

test('Quando o input estiver vazio, não é possivel adicionar novos participantes.', () => {
  render(<Formulario />);

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participante');

  // encontrar o botão
  const button = screen.getByRole('button');

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument();

  // garantir que o botão esteja desabilitado
  expect(button).toBeDisabled();
});
