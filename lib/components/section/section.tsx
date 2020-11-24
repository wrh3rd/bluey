import * as React from 'react';

import { SectionProps } from '../../props';
import './section.scss';

export const Section = (props: SectionProps) => {
  let className = 'section' + (props.className && props.className.length > 0 ? ' ' + props.className : '');

  return (
    <section className={className} 
             style={props.style}
             title={props.title}>{props.children}</section>
  );
}