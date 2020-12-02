import { TextboxType } from '../types';

export interface TextboxProps {
  className?: string;
  multiline?: boolean;
  style?: React.CSSProperties;
  title?: string;
  type?: TextboxType | string;
  value?: string;
}