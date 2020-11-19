import * as React from 'react';

import { NavMenuProps } from '../../models';
import './nav-menu.scss';

export const NavMenu = (props: NavMenuProps) => {
  let className = 'nav-menu';

  return (
    <nav className={className}>{props.children}</nav>
  );
}