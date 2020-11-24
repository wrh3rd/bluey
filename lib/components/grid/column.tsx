import * as React from 'react';

import { ColumnProps } from '../../props';
import './column.scss';

export const Column = (props: ColumnProps) => {
  let className = 'column' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  if (props.size) {
    className += ' ' + props.size;
  }

  return (
    <div className={className} 
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}