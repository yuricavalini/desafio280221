import { GlobalContainer, Main } from './styles';
import GlobalStyles from './styles/GlobalStyles';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/SideBar';
import HomeScreen from './Screens/HomeScreen';
import PersonScreen from './Screens/PersonScreen';
import RoomScreen from './Screens/RoomScreen';
import SingleRoomScreen from './Screens/SingleRoomScreen';
import AreaScreen from './Screens/AreaScreen';
import SingleAreaScreen from './Screens/SingleAreaScreen';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalContainer>
        <Sidebar />
        <Main>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/person" exact component={PersonScreen} />
            <Route path="/rooms" exact component={RoomScreen} />
            <Route path="/rooms/:id" exact component={SingleRoomScreen} />
            <Route path="/areas" exact component={AreaScreen} />
            <Route path="/areas/:id" exact component={SingleAreaScreen} />
          </Switch>
        </Main>
      </GlobalContainer>
    </>
  );
}
