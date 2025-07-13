import { Component, effect, output, signal } from '@angular/core';
import { Denom } from '../denom/denom';
import { Money } from '../denom/denom-type';
import { SheetValues, StrongBoxValues } from '../data-service';
import { Lepedo } from '../lepedo/lepedo';
import { Calculations } from '../calculations/calculations';

@Component({
  selector: 'app-rovancs-base',
  standalone: true,
  imports: [Denom, Lepedo, Calculations],
  templateUrl: './rovancs-base.html',
  styleUrls: ['./rovancs-base.scss'],
})
export class RovancsBase {
  denominations = signal<Money[]>([
    new Money(20000),
    new Money(10000),
    new Money(5000),
    new Money(2000),
    new Money(1000),
    new Money(500),
    new Money(200, 40),
    new Money(100, 20),
    new Money(50, 50),
    new Money(20, 50),
    new Money(10, 50),
    new Money(5, 50),
  ]);

  sendStrongboxValuesEvent = output<StrongBoxValues>();

  sum = signal<number>(0);
  responses = signal<Money[]>([]);
  strongBoxValues = signal<StrongBoxValues>({
    m5: this.denominations()[0],
    m10: this.denominations()[1],
    m20: this.denominations()[2],
    m50: this.denominations()[3],
    m100: this.denominations()[4],
    m200: this.denominations()[5],
    m500: this.denominations()[6],
    m1k: this.denominations()[7],
    m2k: this.denominations()[8],
    m5k: this.denominations()[9],
    m10k: this.denominations()[10],
    m20k: this.denominations()[11],
  });

  sheetData = signal<SheetValues>({
    cassaTotal: 0,
    coupon: 0,
    card: 0,
    pcOut: 0,
    bill: 0,
    order: 0,
    prevDay: 0,
    pcIn: 0,
    skim: 0,
    change: 0,
    sheet: 0,
    euro: 0,
  });

  /**
   *
   */
  constructor() {
    effect(() => {
      this.sendStrongboxValuesEvent.emit(this.strongBoxValues());
    });
  }

  getSheet(sheetData: SheetValues) {
    this.sheetData.set(sheetData);
  }

  calculateSum(response: Money) {
    let new_sum = 0;
    this.responses.update((arr) => {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.baseValue === response.baseValue) {
          arr[i] = response;
          return arr;
        }
      }
      return [...arr, response];
    });

    this.responses().forEach((element) => {
      new_sum += element.sum!;
    });

    this.sum.update((n) => (n = new_sum));
    this.strongBoxValues.set({
      m5: this.responses()[0],
      m10: this.responses()[1],
      m20: this.responses()[2],
      m50: this.responses()[3],
      m100: this.responses()[4],
      m200: this.responses()[5],
      m500: this.responses()[6],
      m1k: this.responses()[7],
      m2k: this.responses()[8],
      m5k: this.responses()[9],
      m10k: this.responses()[10],
      m20k: this.responses()[11],
    });
  }
}
