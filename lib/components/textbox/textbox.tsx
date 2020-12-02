import * as React from 'react';

import { TextboxProps } from '../../props';
import './textbox.scss';

export const Textbox = (props: TextboxProps) => {
  let className = 'textbox' + (props.className && props.className.length > 0 ? ' ' + props.className : '');
  let type = props.type || 'text';

  if (props.multiline && type === 'text') {
    return (
      <textarea className={className} 
                style={props.style}>{props.value}</textarea>
    );
  }
  
  return (
    <input className={className} 
           style={props.style}
           type={type}
           value={props.value} />
  );
}