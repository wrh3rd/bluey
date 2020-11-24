import * as React from 'react';

import { TextboxProps } from '../../props';
import './textbox.scss';

export const Textbox = (props: TextboxProps) => {
  let className = 'textbox' + (props.className && props.className.length > 0 ? ' ' + props.className : '');
  let type = props.type || 'text';
  
  return (
    <input className={className} 
           type={type}
           value={props.value} />
  );
}