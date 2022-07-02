import { FindOperator } from 'typeorm';

export interface ProductFindQuery {
  ids?: number[];
  order: string;
  category: string;
  page: number;
  size: number;
}

export interface WhereType {
  id?: FindOperator<unknown>;
  category?: FindOperator<unknown>;
}
