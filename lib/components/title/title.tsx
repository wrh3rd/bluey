import * as React from 'react';

import { TitleProps } from '../../props';
import './title.scss';

export const Title = (props: TitleProps) => {
  let className = 'title' + (props.className && props.className.length > 0 ? ' ' + props.className : '');
  let tag = 'h' + (props.size || 1).toString();

  return React.createElement(tag, { className: className, style: props.style, title: props.title }, props.children);
}