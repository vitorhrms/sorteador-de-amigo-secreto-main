import { erroState, listaParticipantesState } from '../atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setErro('');
      }, 5000);
      return;
    }
    return setLista((listaAtual: any) => [...listaAtual, nomeDoParticipante]);
  };
};
