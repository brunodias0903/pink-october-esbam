import Logo from "../../assets/esbam-logo.png";
import { HeaderContainer, HeaderLink, HeaderLogo, HeaderNav } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <a
        href="/"
        style={{
          height: "100%",
        }}
      >
        <HeaderLogo src={Logo} alt="esbam-logo" />
      </a>
      <HeaderNav>
        <HeaderLink to="/">INICIO</HeaderLink>
        <HeaderLink to="/about">SOBRE</HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
