import * as React from 'react';

import { TextProps } from '../../props';
import './text.scss';

export const Text = (props: TextProps) => {
  let className = 'text' + (props.className ? ' ' + props.className : '');
  let style = props.style || {};

  return (
    <span className={className} style={style}>{props.children}</span>
  )
}