import { Component, computed,  effect,  inject,  signal} from '@angular/core';
import { LepedoRow } from '../lepedo-row/lepedo-row';
import { Values } from '../lepedo-row/lepedo-values';
import { DataService } from '../data-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-lepedo',
  imports: [LepedoRow, ReactiveFormsModule],
  templateUrl: './lepedo.html',
  styleUrl: './lepedo.scss'
})
export class Lepedo {
  valuesSig = signal<Values[]>([]);
  dataService = inject(DataService);

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
    change: this.change
  });

  pcOutSig = toSignal(this.pcOut.valueChanges);
  billSig = toSignal(this.bill.valueChanges);
  orderSig = toSignal(this.order.valueChanges);
  previousDaySig = toSignal(this.previousDay.valueChanges);
  pcInSig = toSignal(this.pcIn.valueChanges);
  skimSig = toSignal(this.skim.valueChanges);
  changeSig = toSignal(this.change.valueChanges);


  totalsSig = computed<Record<string, number>>(() => {
    return this.valuesSig().reduce((acc, cur) => {
      for (const [key, v] of Object.entries(cur)) {
        if (typeof v === 'number') {
          acc[key] = (acc[key] || 0) + v;
        }
      }
      return acc;
    }, {} as Record<string, number>);
  });


  constructor(){
    effect(()=> {
      this.dataService.lepedoSig.set(this.totalsSig());
      this.dataService.pcOutSig.set(this.pcOutSig() ?? 0);
      this.dataService.billSig.set(this.billSig() ?? 0);
      this.dataService.orderSig.set(this.orderSig() ?? 0);
      this.dataService.previousDaySig.set(this.previousDaySig() ?? 0);
      this.dataService.pcInSig.set(this.pcInSig() ?? 0);
      this.dataService.skimSig.set(this.skimSig() ?? 0);
      this.dataService.changeSig.set(this.changeSig() ?? 0);
    });
  }

  addOrUpdate(value: Values) {
    const list = this.valuesSig();
    const idx  = list.findIndex(v => v.cashier === value.cashier);

    if (idx === -1) {
      // nincs még ilyen cashiert, hozzáadjuk
      this.valuesSig.update(arr => [...arr, value]);
    } else {
      // van már, ezért lecseréljük az adott indexű elemet
      this.valuesSig.update(arr => {
        const copy = [...arr];
        copy[idx] = value;
        return copy;
      });
    }
  }
}
