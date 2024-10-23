import Logo from "../../assets/esbam-logo.png";
import { HeaderContainer, HeaderLogo } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <a
        href="https://esbam.edu.br/"
        style={{
          height: "100%",
        }}
      >
        <HeaderLogo src={Logo} alt="esbam-logo" />
      </a>
      <nav>{/* <StyledLink to="/">INICIO</StyledLink> */}</nav>
    </HeaderContainer>
  );
};

export default Header;
