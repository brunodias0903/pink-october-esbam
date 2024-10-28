import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/esbam-logo.png";
import {
  DropdownMenu,
  HeaderContainer,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
} from "./styles";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const showMobileHeaderOptions = () => {
    if (isMobile && isDropdownOpen) {
      return (
        <DropdownMenu ref={dropdownRef}>
          <HeaderLink to="/" color="#000000" fontWeight={"regular"}>
            Início
          </HeaderLink>
          <HeaderLink to="/about" color="#000000" fontWeight={"regular"}>
            Sobre
          </HeaderLink>
          <HeaderLink
            to="/how-to-prevent"
            color="#000000"
            fontWeight={"regular"}
          >
            Como previnir
          </HeaderLink>
          <HeaderLink to="/find-help" color="#000000" fontWeight={"regular"}>
            Busque ajuda
          </HeaderLink>
        </DropdownMenu>
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isMobile && isDropdownOpen) {
      document.addEventListener("touchstart", handleTouchOutside);
    }

    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [isDropdownOpen, isMobile]);

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
      {!isMobile ? (
        <HeaderNav>
          <HeaderLink to="/">INICIO</HeaderLink>
          <HeaderLink to="/about">SOBRE</HeaderLink>
          <HeaderLink to="/how-to-prevent">COMO PREVINIR</HeaderLink>
          <HeaderLink to="/find-help">BUSQUE AJUDE</HeaderLink>
        </HeaderNav>
      ) : (
        <div onClick={toggleDropdown}>
          <FaBars size={24} color="#ffffff" />
        </div>
      )}

      {showMobileHeaderOptions()}
    </HeaderContainer>
  );
};

export default Header;
