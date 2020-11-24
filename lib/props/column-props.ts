import { Props } from "./props";
import { ColumnSize } from '../types';

export interface ColumnProps extends Props {
  size?: ColumnSize | string;
}