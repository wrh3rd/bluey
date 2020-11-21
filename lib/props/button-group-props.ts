import { Props } from './props';
import { ButtonGroupShape } from '../types';

export interface ButtonGroupProps extends Props {
  shape?: ButtonGroupShape | string;
}