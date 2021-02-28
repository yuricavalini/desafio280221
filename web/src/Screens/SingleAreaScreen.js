import { useEffect, useState } from 'react';
import { Wrapper, PageTitle } from '../styles';

import { CustomTable } from '../components/Table/styles';

export default function SingleRoomScreen(props) {
  const { id } = props.match.params;

  const [areas, setArea] = useState([]);

  const getAreaPerson = async (id) => {
    const url = `http://localhost:8080/areas/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setArea(data.areaPerson);
  };

  useEffect(() => {
    getAreaPerson(id);
  }, [id]);

  return (
    <>
      <PageTitle marginBottom="2.6em">Area #{`${id}`}</PageTitle>
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
            {areas.map((room) => (
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
