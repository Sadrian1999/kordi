import { Component, computed, effect, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Values } from './lepedo-values';

@Component({
  selector: 'app-lepedo-row',
  imports: [ReactiveFormsModule],
  templateUrl: './lepedo-row.html',
  styleUrl: './lepedo-row.scss'
})

export class LepedoRow {
  eurohuf = input<number>(350);
  valuesEvent = output<Values>();

  name   = new FormControl<string|null>('');
  cashier = new FormControl<string|null>('');
  skim   = new FormControl<number|null>(null);
  euro   = new FormControl<number|null>(null);
  sum    = new FormControl<number|null>(null);
  card   = new FormControl<number|null>(null);
  coupon = new FormControl<number|null>(null);
  total  = new FormControl<number|null>(null);

  form = new FormGroup({
    name:   this.name,
    cashier: this.cashier,
    skim:   this.skim,
    euro:   this.euro,
    sum:    this.sum,
    card:   this.card,
    coupon: this.coupon,
    total:  this.total
  });

  nameSig = toSignal(this.name.valueChanges, {initialValue: ""})
  cashierSig = toSignal(this.cashier.valueChanges, {initialValue: ""})
  skimSig = toSignal(this.skim.valueChanges, {initialValue: 0})
  euroSig = toSignal(this.euro.valueChanges, {initialValue: 0})
  sumSig = toSignal(this.sum.valueChanges, {initialValue: 0})
  cardSig = toSignal(this.card.valueChanges, {initialValue: 0})
  couponSig = toSignal(this.coupon.valueChanges, {initialValue: 0})
  totalSig = toSignal(this.total.valueChanges, {initialValue: 0})

  subtracted = computed(() => {
    const s  = this.sumSig()   ?? 0;
    const sk = this.skimSig()  ?? 0;
    const e  = this.euroSig()  ?? 0;
    const eh = this.eurohuf() ?? 350;
    return s + sk + e * eh - 50000;
  });

  diff = computed(() => (this.totalSig() ?? 0) - this.subtracted());


  add(){
    const e = this.euroSig() ?? 0
    this.valuesEvent.emit({
      name: this.nameSig(),
      cashier: this.cashierSig(),
      skim: this.skimSig(),
      euroHuf: e * this.eurohuf(),
      sum: this.sumSig(),
      subtracted: this.subtracted(),
      card: this.cardSig(),
      coupon: this.couponSig(),
      total: this.totalSig(),
      diff: this.diff()
    })
  }

}
