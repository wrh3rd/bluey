import * as React from 'react';

import { NavMenuProps } from '../../props';
import './nav-menu.scss';

export const NavMenu = (props: NavMenuProps) => {
  let className = 'nav-menu' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <nav className={className} 
         style={props.style}
         title={props.title}>{props.children}</nav>
  );
}