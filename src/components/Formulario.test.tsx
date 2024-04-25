import { act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

describe('Comportamentos do Formulario.tsx', () => {
  test('Quando o input estiver vazio, não é possivel adicionar novos participantes.', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participante'
    );
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
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participante'
    );
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
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participante'
    );
    const button = screen.getByRole('button');
    fireEvent.change(input, {
      target: {
        value: 'Vinicius',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Vinicius',
      },
    });
    fireEvent.click(button);

    const mensagemDeErro = screen.getByRole('alert');

    expect(mensagemDeErro.textContent).toBe(
      'Nomes duplicados não são permitidos!'
    );
  });

  test('alerta sumindo apos 3 segundos', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participante'
    );
    const button = screen.getByRole('button');
    fireEvent.change(input, {
      target: {
        value: 'Vinicius',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Vinicius',
      },
    });
    fireEvent.click(button);

    let mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeNull();
  });
});
