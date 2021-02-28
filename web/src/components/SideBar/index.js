import { CustomSidebar, CustomLink } from './styles';

export default function Sidebar() {
  return (
    <CustomSidebar>
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/person">Person</CustomLink>
          </li>
          <li>
            <CustomLink to="/rooms">Room</CustomLink>
          </li>
          <li>
            <CustomLink to="/areas">Area</CustomLink>
          </li>
        </ul>
      </nav>
    </CustomSidebar>
  );
}
