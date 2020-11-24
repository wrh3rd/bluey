import * as React from 'react';

import { TextProps } from '../../props';
import './text.scss';

export const Text = (props: TextProps) => {
  let className = 'text' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <span className={className} 
          style={props.style}
          title={props.title}>{props.children}</span>
  )
}