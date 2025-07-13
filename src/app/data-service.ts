import { Injectable, signal, WritableSignal } from '@angular/core';
import { DataType } from './data-type';
import { Money } from './denom/denom-type';

export interface StrongBoxValues {
  m20k: Money;
  m10k: Money;
  m5k: Money;
  m2k: Money;
  m1k: Money;
  m500: Money;
  m200: Money;
  m100: Money;
  m50: Money;
  m20: Money;
  m10: Money;
  m5: Money;
}

export interface SheetValues {
  cassaTotal: number;
  coupon: number;
  card: number;
  pcOut: number;
  bill: number;
  order: number;
  prevDay: number;
  pcIn: number;
  skim: number;
  change: number;
  sheet: number;
  euro: number;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private strongBoxData: WritableSignal<StrongBoxValues | null> = signal(null);
  private sheetData: WritableSignal<SheetValues | null> = signal(null);

  readonly strongBox$ = this.strongBoxData.asReadonly();
  readonly sheet$ = this.sheetData.asReadonly();

  setMoneyData(value: StrongBoxValues) {
    this.strongBoxData.set(value);
  }

  setSheetData(value: SheetValues) {
    this.sheetData.set(value);
  }

  defaultValues: Record<string, number> = {
    skim: 0,
    euroHuf: 0,
    sum: 0,
    subtracted: 0,
    card: 0,
    coupon: 0,
    total: 0,
    diff: 0,
  };

  safeSig = signal<Money[]>([]);
  lepedoSig = signal<Record<string, number>>(this.defaultValues);
  sumSig = signal<number>(0);
  pcOutSig = signal<number>(0);
  billSig = signal<number>(0);
  orderSig = signal<number>(0);
  previousDaySig = signal<number>(0);
  pcInSig = signal<number>(0);
  skimSig = signal<number>(0);
  changeSig = signal<number>(0);
  euroTotal = signal<number>(0);

  getData() {
    const data: DataType = {
      db20k: this.safeSig()[11],
      db10k: this.safeSig()[10],
      db5k: this.safeSig()[9],
      db2k: this.safeSig()[8],
      db1k: this.safeSig()[7],
      db500: this.safeSig()[6],
      db200: this.safeSig()[5],
      db100: this.safeSig()[4],
      db50: this.safeSig()[3],
      db20: this.safeSig()[2],
      db10: this.safeSig()[1],
      db5: this.safeSig()[0],
      sum: this.sumSig(),
      coupon: this.lepedoSig()['coupon'] ?? 0,
      card: this.lepedoSig()['card'] ?? 0,
      pcOut: this.pcOutSig(),
      bill: this.billSig(),
      order: this.orderSig(),
      prevDay: this.previousDaySig(),
      pcIn: this.pcInSig(),
      skim: this.skimSig(),
      changeOut: this.changeSig(),
      lepedo: (this.lepedoSig()['subtracted'] ?? 0) - this.euroTotal(),
    };
    console.log(data);
    const dataa = {};
    return data;
  }
}
