import * as React from 'react';

import { CheckboxProps } from '../../props';
import './checkbox.scss';

export const Checkbox = (props: CheckboxProps) => {
  let className = 'checkbox' + (props.className ? ' ' + props.className : '');

  return (
    <label className={className} style={props.style}>
      <input checked={props.checked} name={props.name} type="checkbox" value={props.value} />
      <span>{props.children}</span>
    </label>
  );
}