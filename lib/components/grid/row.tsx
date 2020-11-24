import * as React from 'react';

import { RowProps } from '../../props';
import './row.scss';

export const Row = (props: RowProps) => {
  let className = 'row' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <div className={className} 
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}