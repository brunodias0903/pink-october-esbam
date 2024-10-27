import styled from "styled-components";

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
