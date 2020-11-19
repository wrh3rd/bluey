import * as React from 'react';

import { SectionProps } from '../../models';

export const Section = (props: SectionProps) => {
  let className = 'section';

  return (
    <div className={className}>{props.children}</div>
  );
}