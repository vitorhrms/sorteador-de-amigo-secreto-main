import { useRef, useState } from 'react';
import * as S from './styles';
import { useAdicionarParticipante } from '../state/hook/useAdicionarParticipante';
import { useMensagemErro } from '../state/hook/useMensagemDeErro';

const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemErro();

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adicionarNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  };

  return (
    <S.Form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        type="text"
        placeholder="Insira os nomes dos participante"
      />
      <button disabled={!nome}>Adicionar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </S.Form>
  );
};

export default Formulario;
