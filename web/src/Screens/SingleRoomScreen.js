import { useEffect, useState } from 'react';
import { Wrapper, PageTitle } from '../styles';

import { CustomTable } from '../components/Table/styles';

export default function SingleRoomScreen(props) {
  const { id } = props.match.params;

  const [rooms, setRoom] = useState([]);

  const getRoomPerson = async (id) => {
    const url = `http://localhost:8080/rooms/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setRoom(data.roomPerson);
  };

  useEffect(() => {
    getRoomPerson(id);
  }, [id]);

  return (
    <>
      <PageTitle marginBottom="2.6em">Room #{`${id}`}</PageTitle>
      <Wrapper>
        <CustomTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Room Name</th>
              <th>Area Name</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td>{room.name}</td>
                <td>{room.lastName}</td>
                <td>{room.roomName}</td>
                <td>{room.areaName}</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      </Wrapper>
    </>
  );
}
