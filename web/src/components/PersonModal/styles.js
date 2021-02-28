import styled from 'styled-components';

export const CustomButtom = styled.button`
  color: #4caf50;
  font-size: 1.2em;

  margin: ${(props) => props.margin || '1.2em'};
  margin-top: ${(props) => props.marginTop || ''};
  padding: 0.25em 1em;
  border: 2px solid #4caf50;
  border-radius: 3px;
  cursor: pointer;

  display: ${(props) => props.flex || ''};
`;

export const ClosingButtom = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: #4caf50;
  font-size: 2em;
  padding: 5px;

  cursor: pointer;
  border: none;
  background-color: transparent;

  display: flex;
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;

  div {
    margin: 0.5em;
  }

  input {
    height: 30px;
    font-size: 1.2em;
    width: 100%;
  }

  select {
    height: 30px;
    font-size: 1.2em;
    width: 100%;
  }
`;

export const FormTitle = styled.h2`
  margin: 0.5em;
  margin-top: 1em;
  text-align: center;
`;

export const CustomSpam = styled.span`
  color: #4caf50;
  font-size: 1.2em;
  margin: 1.2em;
  padding: 0.25em 1em;
  display: flex;
  border-radius: 3px;
`;
