import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 5vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #008634;
`;

export const FooterText = styled.p`
  display: flex;
  flex-direction: row;

  font-size: 1rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
