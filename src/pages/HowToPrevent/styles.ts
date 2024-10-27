import styled from "styled-components";

export const HowToPreventContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 1vh 3.5vh;

  gap: 2vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CustomHowToPreventImage = styled.img`
  width: 72.6vh;

  @media (max-width: 768px) {
    width: 35vh;
  }
`;

export const CustomSignalsImage = styled.img`
  width: 55vh;

  @media (max-width: 768px) {
    width: 33vh;
  }
`;
