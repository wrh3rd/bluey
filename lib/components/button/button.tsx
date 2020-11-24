import * as React from 'react';

import { ButtonProps } from '../../props';
import { ButtonType } from '../../types';
import './button.scss';

export const Button = (props: ButtonProps) => {
  let checked = false;
  let className = 'button' + (props.className && props.className.length > 0 ? ' ' + props.className : '');;
  let type = 'button';

  if (props.theme) {
    className += ' ' + props.theme;
  }

  if (props.type) {
    console.log(props.type);
    if (props.type === ButtonType.Checkbox) {
      type = 'checkbox';

      if (props.checked) {
        checked = true;
      }
    } else if (props.type === ButtonType.Radio) {
      type = 'radio';

      if (props.checked) {
        checked = true;
      }
    } else {
      className += ' ' + props.type;
    }
  }

  if (type === 'checkbox' || type === 'radio') {
    return (
      <label className={className}
             style={props.style}
             title={props.title}>
        <input defaultChecked={checked}
               name={props.name}
               onChange={props.onClick}
               type={type} />
        <span>{props.children}</span>
      </label>
    );
  }

  return (
    <button className={className}
            name={props.name}
            onClick={props.onClick}
            style={props.style}
            title={props.title}
            type="button">{props.children}</button>
  );
}