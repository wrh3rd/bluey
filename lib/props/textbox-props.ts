import { Props } from './props';
import { TextboxType } from '../types';

export interface TextboxProps extends Props {
  type?: TextboxType | string;
  value?: string;
}