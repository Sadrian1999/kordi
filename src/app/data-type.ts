import { Response } from "./denom/denom-type"

export interface DataType {
  db20k: Response,
  db10k: Response,
  db5k: Response,
  db2k: Response,
  db1k: Response,
  db500: Response,
  db200: Response,
  db100: Response,
  db50: Response,
  db20: Response,
  db10: Response,
  db5: Response,
  sum: number,
  coupon: number,
  card: number,
  pcOut: number,
  bill: number,
  order: number,
  prevDay: number,
  pcIn: number,
  skim: number,
  changeOut: number,
  lepedo: number
}
