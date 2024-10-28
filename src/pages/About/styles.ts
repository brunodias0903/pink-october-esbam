import styled from "styled-components";

export const AboutContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2vh;
`;

export const CardContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 2vh;
`;

export const AboutPinkOctoberImg = styled.img`
  width: 85vh;

  @media (max-width: 768px) {
    width: 40vh;
  }
`;
