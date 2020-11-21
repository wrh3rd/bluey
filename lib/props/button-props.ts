import { Props } from './props';
import { ButtonType, ThemeType } from '../types';

export interface ButtonProps extends Props {
  checked?: boolean;
  name?: string;
  onClick?: React.FormEventHandler<HTMLButtonElement>;
  theme?: ThemeType | string;
  title?: string;
  type?: ButtonType | string;
}