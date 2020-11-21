import * as React from 'react';

import { RadioProps } from '../../props';
import './radio.scss';

export const Radio = (props: RadioProps) => {
  let className = 'radio' + (props.className ? ' ' + props.className : '');

  return (
    <label className={className} style={props.style}>
      <input checked={props.checked} name={props.name} type="radio" value={props.value} />
      <span>{props.children}</span>
    </label>
  );
}