import { fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

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

test('adicionar um participante caso exista um nome preenchido', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participante');
  // encontrar o botão
  const button = screen.getByRole('button');
  // inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Vinicius',
    },
  });
  // clicar no botão de submit
  fireEvent.click(button);
  // garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();
  // garantir que o input não tenha um valor
  expect(input).toHaveValue('');
});

test('nomes duplicados não podem ser adicionados na lista', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
});
