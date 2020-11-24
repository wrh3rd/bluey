import * as React from 'react';

import { ViewProps } from '../../props';
import './view.scss';

export const View = (props: ViewProps) => {
  return (
    <div className={props.className} 
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}