import * as React from 'react';

import { Button } from '../button';
import { NavMenuItemProps } from '../../models';
import { ButtonType } from '../../types';

export const NavMenuItem = (props: NavMenuItemProps) => {
  let className = 'nav-menu-item';

  return (
    <Button className={className} 
            type={ButtonType.Clear}
            onClick={() => { 
              if (props.href) { 
                window.location.href = props.href; 
              } 
            }}>{props.children}</Button>
  );
}