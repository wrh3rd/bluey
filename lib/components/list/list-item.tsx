import * as React from 'react';

import { ListItemProps } from '../../props';

export const ListItem = (props: ListItemProps) => {
  let className = 'list' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <li className={className}
        style={props.style}
        title={props.title}>{props.children}</li>
  );
}