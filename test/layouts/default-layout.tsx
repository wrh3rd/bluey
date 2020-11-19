import * as React from 'react';

import { NavMenu, NavMenuItem } from '../..';

export default ({ children }) => {
  return (
    <div>
      <NavMenu>
        <NavMenuItem href="/">Home</NavMenuItem>
        <NavMenuItem href="/buttons">Buttons</NavMenuItem>
      </NavMenu>

      <div>{children}</div>
    </div>
  )
}