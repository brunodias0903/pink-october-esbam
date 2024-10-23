import PinkOctober from "../../assets/pink-october.jpeg";
import {
  HomeContainer,
  HomeContentContainer,
  HomeContentText,
  HomePinkOctoberImg,
  HomeSubtitle,
  HomeTitle,
  HomeTitleContainer,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitleContainer>
        <HomeTitle>OUTUBRO ROSA:</HomeTitle>
        <HomeSubtitle>JUNTOS NA LUTA CONTRA O CÂNCER DE MAMA</HomeSubtitle>
      </HomeTitleContainer>
      <HomePinkOctoberImg src={PinkOctober} />
      <HomeContentContainer>
        <HomeContentText>
          O <strong style={{ color: "#fa2a8e" }}>Outubro Rosa</strong> é um
          movimento global de conscientização sobre a importância da prevenção e
          do diagnóstico precoce do câncer de mama. Durante todo o mês de
          outubro, promovemos ações para educar e alertar as mulheres sobre os
          cuidados com a saúde, incentivando a realização de exames regulares,
          como a mamografia, que pode salvar vidas. <br />O câncer de mama é o
          tipo mais comum entre as mulheres, mas a detecção precoce aumenta
          significativamente as chances de cura. Por isso, fique atenta aos
          sinais do seu corpo e mantenha seus exames em dia. Participe dessa
          campanha, compartilhe essa mensagem e ajude a salvar vidas. <br />
          <br />{" "}
          <strong style={{ color: "#fa2a8e" }}>
            PREVINA-SE! CUIDAR DE SI É UM ATO DE AMOR.
          </strong>
        </HomeContentText>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;
