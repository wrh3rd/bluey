import * as React from 'react';
import { Button } from '../button';
import { Link } from '../link';
import { ButtonLinkProps } from '../../props';
import './button-link.scss';

export const ButtonLink = (props: ButtonLinkProps) => {
  let className = 'button-link' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <Link className={className}
          to={props.to}>
      <Button checked={props.checked} 
              name={props.name} 
              style={props.style} 
              theme={props.theme} 
              title={props.title}
              type={props.type}>
        {props.children}
      </Button>
    </Link>
  );
}