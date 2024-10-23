import styled from "styled-components";

export const HomeContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2vh;
`;

export const HomePinkOctoberImg = styled.img`
  width: 40vh;

  @media (max-width: 768px) {
    width: 35vh;
  }
`;

export const HomeTitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;

  color: #fa2a8e;
`;

export const HomeSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;

  text-align: center;

  color: #fa2a8e;
`;

export const HomeContentContainer = styled.div`
  width: 80%;

  padding: 2vh 3.5vh;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HomeContentText = styled.p`
  font-size: 1.3rem;
  color: #000000;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
