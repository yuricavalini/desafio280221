import { useEffect, useState } from 'react';

import { Wrapper, PageTitle } from '../styles';

import { CustomTable } from '../components/Table/styles';

export default function PersonScreen() {
  const [person, setPerson] = useState([]);

  const getPerson = async () => {
    const url = 'http://localhost:8080/person';
    const response = await fetch(url);
    const data = await response.json();
    setPerson(data.person);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <>
      <PageTitle marginBottom="2.6em">Person</PageTitle>

      <Wrapper>
        <CustomTable>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Room</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {person
              ? person.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.lastName}</td>
                    <td>{p.roomName}</td>
                    <td>{p.areaName}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </CustomTable>
      </Wrapper>
    </>
  );
}
