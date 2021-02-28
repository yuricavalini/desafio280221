import { useState, useEffect } from 'react';
import { CustomTable } from './styles';

const TIMEOUT_VALUE = 300;

export default function Table({ person }) {
  const [areas, setAreas] = useState([]);
  const [rooms, setRooms] = useState([]);

  const getAreas = async () => {
    const url = 'http://localhost:8080/areas';
    const response = await fetch(url);
    const data = await response.json();
    setAreas(data.areas);
  };
  const getRooms = async () => {
    const url = 'http://localhost:8080/rooms';
    const response = await fetch(url);
    const data = await response.json();
    setRooms(data.rooms);
  };

  useEffect(() => {
    getAreas();
    getRooms();
  }, []);

  function noChangeAlert() {
    return setTimeout(() => alert(`Nothing has been changed.`), TIMEOUT_VALUE);
  }

  function handleRoomChange(roomName, p) {
    const roomAnswer = window.confirm(
      `You are about to change ${p.name} room ${p.roomName} to room ${roomName}. Are you sure?`
    );

    if (!roomAnswer) {
      return noChangeAlert();
    }

    fetch(`http://localhost:8080/person/${p.id}/room`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomName: roomName }),
    })
      .then(() => {
        setTimeout(
          () =>
            alert(
              `Room Changed Successfully for ${p.name}. Went from room ${p.roomName} to ${roomName}`
            ),
          TIMEOUT_VALUE
        );
      })
      .catch(() => {
        alert('Something went wrong!');
      });
  }

  async function handleAreaChange(areaName, p) {
    const AreaAnswer = window.confirm(
      `Are you sure about changing ${p.name} area?`
    );

    if (!AreaAnswer) {
      return noChangeAlert();
    }

    fetch(`http://localhost:8080/person/${p.id}/area`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ areaName: areaName }),
    })
      .then(() => {
        setTimeout(
          () =>
            alert(
              `Room Changed Successfully for ${p.name}. Went from area ${p.areaName} to ${areaName}`
            ),
          TIMEOUT_VALUE
        );
      })
      .catch(() => {
        alert('Something went wrong!');
      });
  }

  return (
    <>
      {areas &&
      rooms &&
      person &&
      person.length > 0 &&
      areas.length > 0 &&
      rooms.length > 0 ? (
        <>
          <CustomTable>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Room</th>
                <th>Select Room</th>
                <th>Area</th>
                <th>Select Area</th>
              </tr>
            </thead>
            <tbody>
              {person.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.lastName}</td>
                  <td>{p.roomName}</td>
                  <td>
                    <select
                      value={p.roomName}
                      onChange={({ target: { value } }) =>
                        handleRoomChange(value, p)
                      }
                    >
                      <option value="" disable="true" hidden>
                        Select an option
                      </option>

                      {rooms.map((room) => {
                        return (
                          <option key={room.id} value={room.name}>
                            {room.name}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td>{p.areaName}</td>
                  <td>
                    <select
                      value={p.areaName}
                      onChange={({ target: { value } }) =>
                        handleAreaChange(value, p)
                      }
                    >
                      <option value="" disable="true" hidden>
                        Select an option
                      </option>

                      {areas.map((area) => {
                        return (
                          <option key={area.id} value={area.name}>
                            {area.name}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </>
      ) : (
        <h1>No data found.</h1>
      )}
    </>
  );
}
