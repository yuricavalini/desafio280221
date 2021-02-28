import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomSidebar = styled.aside`
  background-color: #333;
  flex: 0 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    margin: auto 0;
  }

  ul {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
  }

  li {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0.3rem;
      background-color: #4caf50;
      transform: scaleY(0);

      transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
        background-color 0.1s;
    }

    &:hover::before,
    &::before {
      transform: scaleY(1);
      width: 100%;
      background-color: #4caf50;
    }

    &:link,
    &:visited {
      color: #faf9f9;
      background-color: #4caf50;
      text-decoration: none;
      text-transform: uppercase;
      padding: 1.5rem 3rem;
      z-index: 10;
      position: relative;

      display: flex;
      align-items: center;
    }
  }
`;

export const CustomLink = styled(Link)`
  color: #faf9f9;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  z-index: 10;
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  transition: 0.5s all;

  &:hover {
    color: #4caf50;
    background: #faf9f9;
  }
`;
