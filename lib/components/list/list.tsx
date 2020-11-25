import * as React from 'react';

import { ListProps } from '../../props';
import './list.scss';

export const List = (props: ListProps) => {
  let className = 'list' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  if (props.position) {
    className += ' ' + props.position;
  }

  if (props.type) {
    className += ' ' + props.type;
  }

  return (
    <ul className={className}
        style={props.style}
        title={props.title}>{props.children}</ul>
  );
}