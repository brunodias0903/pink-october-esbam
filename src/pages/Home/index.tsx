import PinkOctober from "../../assets/pink-october.jpeg";
import {
  HomeContainer,
  HomeContentContainer,
  HomeContentText,
  HomePinkOctoberImg,
  HomeSubtitle,
  HomeTitle,
  HomeTitleContainer,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
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
      {/* Cards */}
      <CardContainer>
        <Card style={{ backgroundColor: "#f06292" }}>
          <CardTitle className="card-title">Nossa luta</CardTitle>
          <CardContent className="card-content">
            <p>
            O Outubro Rosa é uma campanha de conscientização realizada anualmente, com o objetivo de alertar sobre a importância da prevenção e do diagnóstico precoce do câncer de mama. Esse movimento teve início nos Estados Unidos na década de 1990 e, desde então, expandiu-se mundialmente.
            </p>
          </CardContent>
        </Card>
        <Card style={{ backgroundColor: "#ad1457" }}>
          <CardTitle className="card-title">Seus direitos</CardTitle>
          <CardContent className="card-content">
            <p>
            Pacientes com câncer possuem diversos direitos garantidos por lei – tanto de acesso à saúde quantos sociais – que às vezes desconhece. Uma vez desrespeitados, o paciente pode tomar as providências cabíveis e exigir o seu cumprimento.
            </p>
          </CardContent>
        </Card>
        <Card style={{ backgroundColor: "#733849" }}>
          <CardTitle className="card-title">Convivendo com câncer</CardTitle>
          <CardContent className="card-content">
            <p>
            Durante a descoberta do câncer de mama, é normal que não só a vida da paciente como também da família e dos amigos sejam afetadas. Se você é membro da família, amigo ou cuidador de alguém com câncer de mama é importante que você saiba lidar com os desafios da doença juntamente com seu ente querido.
            </p>
          </CardContent>
        </Card>
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
