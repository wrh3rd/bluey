import * as React from 'react';

import { ButtonGroupProps } from '../../props';
import './button-group.scss';

export const ButtonGroup = (props: ButtonGroupProps) => {
  let className = 'button-group' + (props.className && props.className.length > 0 ? ' ' + props.className : '');;

  if (props.shape) {
    className += ' ' + props.shape;
  }

  return (
    <div className={className}
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}