import * as React from 'react';

import { Button } from '../button';
import { NavMenuItemProps } from '../../props';
import { ButtonType } from '../../types';
import './nav-menu-item.scss';

export const NavMenuItem = (props: NavMenuItemProps) => {
  let className = 'nav-menu-item' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <Button className={className} 
            style={props.style}
            title={props.title}
            type={ButtonType.Clear}
            onClick={() => { 
              if (props.href) { 
                window.location.href = props.href; 
              } 
            }}>{props.children}</Button>
  );
}