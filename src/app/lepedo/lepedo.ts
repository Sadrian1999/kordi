import { Component, computed,  effect,  signal} from '@angular/core';
import { LepedoRow } from '../lepedo-row/lepedo-row';
import { Values } from '../lepedo-row/lepedo-values';

@Component({
  selector: 'app-lepedo',
  imports: [LepedoRow],
  templateUrl: './lepedo.html',
  styleUrl: './lepedo.scss'
})
export class Lepedo {
  valuesSig = signal<Values[]>([]);

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
      console.log(this.totalsSig());
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

  sumBy<T, K extends keyof T>(
    arr: T[],
    key: K
  ): number {
    return arr.reduce((acc, obj) => {
      const v = obj[key];
      return acc + (typeof v === 'number' ? v : 0);
    }, 0);
  }
}
