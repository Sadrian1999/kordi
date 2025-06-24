import { Injectable, signal } from '@angular/core';
import { DataType } from './data-type';
import { Response } from './denom/denom-type';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  defaultValues: Record<string, number>= {
    skim: 0,
    euroHuf: 0,
    sum: 0,
    subtracted: 0,
    card: 0,
    coupon: 0,
    total: 0,
    diff: 0

}

  safeSig = signal<Response[]>([]);
  lepedoSig = signal<Record<string, number>>(this.defaultValues);
  sumSig = signal<number>(0);
  pcOutSig = signal<number>(0);
  billSig = signal<number>(0);
  orderSig = signal<number>(0);
  previousDaySig = signal<number>(0);
  pcInSig = signal<number>(0);
  skimSig = signal<number>(0);
  changeSig = signal<number>(0);


  getData(){
    const data: DataType = {
      db20k: this.safeSig()[0],
      db10k: this.safeSig()[1],
      db5k: this.safeSig()[2],
      db2k: this.safeSig()[3],
      db1k: this.safeSig()[4],
      db500: this.safeSig()[5],
      db200: this.safeSig()[6],
      db100: this.safeSig()[7],
      db50: this.safeSig()[8],
      db20: this.safeSig()[9],
      db10: this.safeSig()[10],
      db5: this.safeSig()[11],
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
      lepedo: this.lepedoSig()['subtracted'] ?? 0
    }
    console.log(data);
    return data;
  }
}
