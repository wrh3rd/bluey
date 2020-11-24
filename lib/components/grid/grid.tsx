import * as React from 'react';

import { GridProps } from '../../props';
import './grid.scss';

export const Grid = (props: GridProps) => {
  let className = 'grid' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <div className={className} 
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}