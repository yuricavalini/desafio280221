import { useEffect, useState } from 'react';

import { Wrapper, PageTitle, TableLink } from '../styles';

import { CustomTable } from '../components/Table/styles';

export default function PersonScreen() {
  const [areas, setAreas] = useState([]);

  const getAreas = async () => {
    const url = 'http://localhost:8080/areas';
    const response = await fetch(url);
    const data = await response.json();
    setAreas(data.areas);
  };

  useEffect(() => {
    getAreas();
  }, []);

  return (
    <>
      <PageTitle marginBottom="2.6em">Area</PageTitle>
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
            {areas
              ? areas.map((area) => (
                  <tr key={area.id}>
                    <td>
                      <div>
                        <TableLink to={`/areas/${area.id}`}>
                          {area.id}
                        </TableLink>
                      </div>
                    </td>
                    <td>{area.name}</td>
                    <td>{area.occupancy}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </CustomTable>
      </Wrapper>
    </>
  );
}
