import * as React from 'react';

import { ViewProps } from '../../props';

export const View = (props: ViewProps) => {
  return (
    <div className={props.className} style={props.style}>{props.children}</div>
  );
}