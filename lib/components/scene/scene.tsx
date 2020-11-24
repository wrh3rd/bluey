import * as React from 'react';

import { SceneProps } from '../../props';
import './scene.scss';

export const Scene = (props: SceneProps) => {
  let className = 'scene' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <div className={className} 
         style={props.style}
         title={props.title}>{props.children}</div>
  );
}