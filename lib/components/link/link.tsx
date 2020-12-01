import * as React from 'react';
import { LinkProps } from '../../props/link-props';
import './link.scss';

export const Link = (props: LinkProps) => {
  let className = 'link' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  if (props.to && typeof props.to === 'function') {
    return (
      <a className={className}
         onClick={props.to}
         style={props.style}
         title={props.title}>
        {props.children}
      </a>
    );
  }

  return (
    <a className={className}
       href={props.to.toString()}
       style={props.style}
       title={props.title}>
      {props.children}
    </a>
  )
}