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

  gap: 2vh;

  background-color: #008634;
`;

export const HeaderLogo = styled.img`
  height: 100%;
`;

export const HeaderNav = styled.nav`
  display: flex;

  gap: 2vh;
`;

export const HeaderLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    color: #e1e1e1;
  }
`;
