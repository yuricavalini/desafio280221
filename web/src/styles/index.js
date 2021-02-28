import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: flex;

  height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1080px;
  padding: 32px 16px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  border-radius: 3px;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  color: #faf9f9;
  background-color: #4caf50;
  margin-bottom: ${(props) => props.marginBottom || ''};
`;

export const TableLink = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 700;
  color: #4caf50;

  &:hover {
    color: #206123;
  }
`;
