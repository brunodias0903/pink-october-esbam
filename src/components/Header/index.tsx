import Logo from "../../assets/esbam-logo.png";
import { HeaderContainer, HeaderLogo } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <a
        style={{
          height: "100%",
        }}
      >
        <HeaderLogo src={Logo} alt="esbam-logo" />
      </a>
    </HeaderContainer>
  );
};

export default Header;
