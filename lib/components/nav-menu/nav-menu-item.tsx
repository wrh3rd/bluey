import * as React from 'react';
import { NavMenuItemProps } from '../../props';
import './nav-menu-item.scss';

export const NavMenuItem = (props: NavMenuItemProps) => {
  let className = 'nav-menu-item' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <div className={className}
       style={props.style}
       title={props.title}>
         {props.children}
    </div>
  );
}