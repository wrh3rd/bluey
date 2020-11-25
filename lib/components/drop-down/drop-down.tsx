import * as React from 'react';

import { DropDownProps } from '../../props';
import './drop-down.scss';

export const DropDown = (props: DropDownProps) => {
  let className = 'drop-down' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <div className={className}
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}