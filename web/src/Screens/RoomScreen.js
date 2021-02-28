import { useEffect, useState } from 'react';

import { Wrapper, PageTitle, TableLink } from '../styles';

import { CustomTable } from '../components/Table/styles';

export default function PersonScreen() {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    const url = 'http://localhost:8080/rooms';
    const response = await fetch(url);
    const data = await response.json();
    setRooms(data.rooms);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <PageTitle marginBottom="2.6em">Room</PageTitle>
      <Wrapper>
        <CustomTable>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Occupancy</th>
            </tr>
          </thead>
          <tbody>
            {rooms
              ? rooms.map((room) => (
                  <tr key={room.id}>
                    <td>
                      <div>
                        <TableLink to={`/rooms/${room.id}`}>
                          {room.id}
                        </TableLink>
                      </div>
                    </td>
                    <td>{room.name}</td>
                    <td>{room.occupancy}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </CustomTable>
      </Wrapper>
    </>
  );
}
