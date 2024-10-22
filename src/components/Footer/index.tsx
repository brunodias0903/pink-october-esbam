import { FooterContainer, FooterText } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; 2024{" "}
        <a
          href="https://github.com/brunodias0903"
          style={{ cursor: "pointer" }}
        >
          <FooterText
            style={{
              margin: "0px 5px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            BRUNO DIAS
          </FooterText>
        </a>{" "}
        &{" "}
        <a href="https://esbam.edu.br/" style={{ cursor: "pointer" }}>
          <FooterText
            style={{
              marginLeft: "5px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            ESBAM
          </FooterText>
        </a>
        . Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
