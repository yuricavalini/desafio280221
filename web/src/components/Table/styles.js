import styled from 'styled-components';

export const CustomTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #ddd;
  line-height: 10px;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    text-align: center;
    width: 100px;
    line-height: 20px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4caf50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  select {
    width: 100%;
    text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;

    height: 25px;
  }

  button {
    width: 100%;
  }

  option {
    height: 25px;
  }
`;

export const CustomDiv = styled.div`
  text-align: center;
  margin-top: 150px;
`;
