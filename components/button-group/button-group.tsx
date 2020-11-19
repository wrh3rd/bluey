import * as React from 'react';

import { ButtonGroupProps } from '../../models';

export const ButtonGroup = (props: ButtonGroupProps) => {
  let className = 'button-group';

  if (props.shape) {
    className += ' ' + props.shape;
  }

  return (
    <div className={className}>{props.children}</div>
  );
}