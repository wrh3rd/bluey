import * as React from 'react';

import { PanelProps } from '../../props';
import './panel.scss';

export const Panel = (props: PanelProps) => {
  let className = 'panel' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <div className={className} 
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}