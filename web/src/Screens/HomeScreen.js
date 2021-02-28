import { Wrapper, Content, PageTitle } from '../styles/index';

import Person from '../components/Person';
import PersonModal from '../components/PersonModal';
import RoomModal from '../components/RoomModal';
import AreaModal from '../components/AreaModal';

export default function Home() {
  return (
    <>
      <PageTitle>Easy Manager</PageTitle>

      <Wrapper>
        <PersonModal />
        <RoomModal />
        <AreaModal />
      </Wrapper>

      <Content>
        <Person />
      </Content>
    </>
  );
}
