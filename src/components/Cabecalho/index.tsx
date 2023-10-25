import * as S from './styles';
import Participante from '../../assets/images/participante.png';

const Cabecalho = () => {
  return (
    <S.Cabecalho className="cabecalho">
      <S.ImgLogo
        className="imagem-logo"
        role="img"
        aria-label="Logo do Sorteador"
      ></S.ImgLogo>
      <S.Img
        className="participante"
        src={Participante}
        alt="Participante com um presente na mão"
      />
    </S.Cabecalho>
  );
};

export default Cabecalho;
