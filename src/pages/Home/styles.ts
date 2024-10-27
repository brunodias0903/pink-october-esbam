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

// Cards:
export const CardContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 400px;
  height: 300px;
  margin: 8px;
  border-radius: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: #fff;
    transform: scale(1.05);
  }

  &:hover .card-title {
    opacity: 0;
    transform: translateY(-20px);
  }

  &:hover .card-content {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 2.7rem;
  font-weight: bold;
`;

export const CardContent = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 25px;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  max-height: 100%; 
  overflow: auto;
  position: absolute;
  transform: translateY(20px);
  text-align: center; 
  scrollbar-width: none;
`;
