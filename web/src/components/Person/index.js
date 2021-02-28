import { useState, useEffect } from 'react';
import socketIo from 'socket.io-client';

import Table from '../Table';

import { Container } from './styles';

export default function Person() {
  const [person, setPerson] = useState([]);

  const getPerson = async () => {
    const url = 'http://localhost:8080/person';
    const response = await fetch(url);
    const data = await response.json();
    setPerson(data.person);
  };

  useEffect(() => {
    getPerson();

    const socket = socketIo('http://localhost:8080', {
      transports: ['websocket'],
    });

    // broken code. Crashes application for the first time
    // socket.on('newPerson', (p) => {
    //   setPerson((prevState) => [p, ...prevState]);
    // });

    socket.on('updatedPersonRoom', (updatedPersonRoom) => {
      setPerson((prevState) =>
        prevState.map((p) =>
          p.id === updatedPersonRoom.id ? updatedPersonRoom : p
        )
      );
    });

    socket.on('updatedPersonArea', (updatedPersonArea) => {
      setPerson((prevState) =>
        prevState.map((p) =>
          p.id === updatedPersonArea.id ? updatedPersonArea : p
        )
      );
    });
  }, []);

  return (
    <Container>
      <Table person={person} />
    </Container>
  );
}
