import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 15vh;

  @media (max-width: 768px) {
    height: 10vh;
    justify-content: space-between;
  }

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1vh 3.5vh;

  gap: 5vh;

  background-color: #008634;

  @media (max-width: 768px) {
    gap: 0;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled.img`
  height: 100%;
`;

export const HeaderNav = styled.nav`
  display: flex;

  gap: 3vh;
`;

interface HeaderLinkProps {
  color?: string;
  fontWeight?: number | string;
}

export const HeaderLink = styled(Link)<HeaderLinkProps>`
  color: ${({ color }) => color || "#ffffff"};
  text-decoration: none;

  cursor: pointer;

  font-size: 1.2rem;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 7vh;
  right: 3.5vh;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 1vh 0;
  overflow: hidden;
  animation: slideDown 0.3s ease;
  z-index: 1000;

  ${HeaderLink} {
    padding: 8px 16px;
    width: 100%;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
