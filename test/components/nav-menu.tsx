import { Link, NavMenu, NavMenuItem, ThemeType } from '../../lib';

export default () => {
  return (
    <NavMenu theme={ThemeType.Primary}>
      <NavMenuItem>
        <Link to="/">Home</Link>
      </NavMenuItem>
      <NavMenuItem>
        <Link to="/components">Components</Link>
      </NavMenuItem>
    </NavMenu>
  );
}