import * as React from 'react';

import { FlowProps } from '../../props';
import './flow.scss';

export const Flow = (props: FlowProps) => {
  let className = 'flow' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <div className={className}
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}