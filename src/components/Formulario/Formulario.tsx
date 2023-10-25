import { useRef, useState } from 'react';
import * as S from './styles';

const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNome('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        type="text"
        placeholder="Insira os nomes dos participante"
      />
      <button disabled={!nome}>Adicionar</button>
    </form>
  );
};

export default Formulario;
