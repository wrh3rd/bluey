import { Props } from './props';
import { ListPosition, ListType } from '../types';

export interface ListProps extends Props {
  position?: ListPosition | string;
  type?: ListType | string;
}