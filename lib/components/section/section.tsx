import * as React from 'react';

import { SectionProps } from '../../props';
import './section.scss';

export const Section = (props: SectionProps) => {
  let className = 'section';

  return (
    <section className={className}>{props.children}</section>
  );
}