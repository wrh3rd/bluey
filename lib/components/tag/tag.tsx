import * as React from 'react';

import { TagProps } from '../../props';
import './tag.scss';

export const Tag = (props: TagProps) => {
  let className = 'tag' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  if (props.type) {
    className += ' ' + props.type;
  }

  return (
    <span className={className} 
          style={props.style}
          title={props.title}>{props.children}</span>
  )
}