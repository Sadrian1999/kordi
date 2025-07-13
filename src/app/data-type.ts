import { Money } from './denom/denom-type';

export interface DataType {
  db20k: Money;
  db10k: Money;
  db5k: Money;
  db2k: Money;
  db1k: Money;
  db500: Money;
  db200: Money;
  db100: Money;
  db50: Money;
  db20: Money;
  db10: Money;
  db5: Money;
  sum: number;
  coupon: number;
  card: number;
  pcOut: number;
  bill: number;
  order: number;
  prevDay: number;
  pcIn: number;
  skim: number;
  changeOut: number;
  lepedo: number;
}
