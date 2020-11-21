import * as React from 'react';

import { SceneProps } from '../../props';
import './scene.scss';

export const Scene = (props: SceneProps) => {
  let className = 'scene';

  return (
    <div className={className}>{props.children}</div>
  );
}