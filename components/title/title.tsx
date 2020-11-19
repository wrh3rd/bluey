import * as React from 'react';

import { TitleProps } from '../../models';

export const Title = (props: TitleProps) => {
  let className = 'title' + (props.className ? ' ' + props.className : '');
  let style = props.style || {};
  let tag = 'h' + (props.size || 1).toString();

  return React.createElement(tag, { className, style }, props.children);
}