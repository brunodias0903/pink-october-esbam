import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #e1e1e1;

  display: flex;
  flex-direction: column;
`;

export const LayoutMainContent = styled.main`
  width: 100%;

  display: flex;
  flex-grow: 1;
  overflow-y: auto;

  padding: 2vh;
`;
