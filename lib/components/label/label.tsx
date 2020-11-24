import * as React from 'react';

import { LabelProps } from '../../props';
import './label.scss';

export const Label = (props: LabelProps) => {
  let className = 'label' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  if (props.type) {
    className += ' ' + props.type;
  }

  return (
    <div className={className} 
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}