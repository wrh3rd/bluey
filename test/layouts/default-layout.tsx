import * as React from 'react';
import { Link } from "react-router-dom";

import { NavMenu, NavMenuItem } from '../../lib';

export default ({ children }) => {
  return (
    <div>
      <NavMenu>
        <NavMenuItem>
          <Link to="/">Home</Link>
        </NavMenuItem>
        <NavMenuItem>
          <Link to="/buttons">Buttons</Link>
        </NavMenuItem>
      </NavMenu>

      {children}
    </div>
  )
}