import PinkOctober from "../../assets/pink-october-2.jpg";
import CustomCard from "../../components/CustomCard";
import { AboutContainer, AboutPinkOctoberImg, CardContainer } from "./styles";

const About = () => {
  return (
    <AboutContainer>
      <CardContainer>
        <CustomCard
          backgroundColor="#f06292"
          title="Nossa luta"
          content="O Outubro Rosa é uma campanha de conscientização realizada
              anualmente, com o objetivo de alertar sobre a importância da
              prevenção e do diagnóstico precoce do câncer de mama. Esse
              movimento teve início nos Estados Unidos na década de 1990 e,
              desde então, expandiu-se mundialmente."
        />

        <CustomCard
          backgroundColor="#ad1457"
          title="Seus direitos"
          content="Pacientes com câncer possuem diversos direitos garantidos por lei
              – tanto de acesso à saúde quantos sociais – que às vezes
              desconhece. Uma vez desrespeitados, o paciente pode tomar as
              providências cabíveis e exigir o seu cumprimento."
        />

        <CustomCard
          backgroundColor="#733849"
          title="Convivendo com câncer"
          content="Durante a descoberta do câncer de mama, é normal que não só a vida da
          paciente como também da família e dos amigos sejam afetadas. Se você é
          membro da família, amigo ou cuidador de alguém com câncer de mama é
          importante que você saiba lidar com os desafios da doença juntamente
          com seu ente querido."
        />
      </CardContainer>

      <AboutPinkOctoberImg src={PinkOctober} />
    </AboutContainer>
  );
};

export default About;
