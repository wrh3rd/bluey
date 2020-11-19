import * as React from 'react';

import { SceneProps } from '../../models';

export const Scene = (props: SceneProps) => {
  let className = 'scene';

  return (
    <div className={className}>{props.children}</div>
  );
}