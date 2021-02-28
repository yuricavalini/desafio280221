import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow-x: hidden;

  h1 {
    display: flex;
    align-items: center;
    align-self: center;
    margin-top: 12%;
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 16px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 18px;
      font-weight: normal;
    }
    small {
      background: #ccc;
      border-radius: 5px;
      padding: 4px 8px;
      color: #fff;
    }
  }
  p {
    font-size: 14px;
    font-weight: normal;
    margin-top: 16px;
  }
  select {
    margin-top: 8px;
    width: 100%;
    height: 45px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
