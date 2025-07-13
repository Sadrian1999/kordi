import { Component, computed, effect, output, signal } from '@angular/core';
import { LepedoRow } from '../lepedo-row/lepedo-row';
import { Values } from '../lepedo-row/lepedo-values';
import { DataService, SheetValues } from '../data-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-lepedo',
  imports: [LepedoRow, ReactiveFormsModule],
  templateUrl: './lepedo.html',
  styleUrl: './lepedo.scss',
})
export class Lepedo {
  valuesSig = signal<Values[]>([]);
  outEvent = output<SheetValues>();

  constructor() {
    effect(() => {
      let euroValues = 0;
      for (let index = 0; index < this.valuesSig().length; index++) {
        const element = this.valuesSig()[index].euroHuf;
        euroValues += element!;
      }
      this.outEvent.emit({
        cassaTotal: 500000,
        coupon: this.totalsSig()['coupon'] ?? 0,
        card: this.totalsSig()['card'] ?? 0,
        pcOut: this.pcOutSig() ?? 0,
        bill: this.billSig() ?? 0,
        order: this.orderSig() ?? 0,
        prevDay: this.previousDaySig() ?? 0,
        pcIn: this.pcInSig() ?? 0,
        skim: this.skimSig() ?? 0,
        change: this.changeSig() ?? 0,
        sheet: this.totalsSig()['subtracted'] ?? 0,
        euro: this.totalsSig()['euroHuf'] ?? 0,
      });
    });
  }

  pcOut = new FormControl<number>(0);
  bill = new FormControl<number>(0);
  order = new FormControl<number>(0);
  previousDay = new FormControl<number>(0);
  pcIn = new FormControl<number>(0);
  skim = new FormControl<number>(0);
  change = new FormControl<number>(0);

  form = new FormGroup({
    pcOut: this.pcOut,
    bill: this.bill,
    order: this.order,
    previousDay: this.previousDay,
    pcIn: this.pcIn,
    skim: this.skim,
    change: this.change,
  });

  pcOutSig = toSignal(this.pcOut.valueChanges);
  billSig = toSignal(this.bill.valueChanges);
  orderSig = toSignal(this.order.valueChanges);
  previousDaySig = toSignal(this.previousDay.valueChanges);
  pcInSig = toSignal(this.pcIn.valueChanges);
  skimSig = toSignal(this.skim.valueChanges);
  changeSig = toSignal(this.change.valueChanges);

  totalsSig = computed<Record<string, number>>(() => {
    return this.valuesSig().reduce(
      (acc, cur) => {
        for (const [key, v] of Object.entries(cur)) {
          if (typeof v === 'number') {
            acc[key] = (acc[key] || 0) + v;
          }
        }
        return acc;
      },
      {} as Record<string, number>,
    );
  });

  addOrUpdate(value: Values) {
    const list = this.valuesSig();
    const idx = list.findIndex((v) => v.cashier === value.cashier);

    if (idx === -1) {
      this.valuesSig.update((arr) => [...arr, value]);
    } else {
      this.valuesSig.update((arr) => {
        const copy = [...arr];
        copy[idx] = value;
        return copy;
      });
    }
  }
}
