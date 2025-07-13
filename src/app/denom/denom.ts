import { Component, computed, effect, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Money } from './denom-type';

@Component({
  selector: 'app-denom',
  imports: [ReactiveFormsModule],
  templateUrl: './denom.html',
  styleUrl: './denom.scss',
})
export class Denom {
  moneyBaseValue = input<number>(0);
  rollSize = input<number>(0);

  sumEvent = output<Money>();

  db: FormControl = new FormControl<number>(0, {
    nonNullable: true,
  });
  roll: FormControl = new FormControl<number>(0, {
    nonNullable: true,
  });

  dbSig = toSignal(this.db.valueChanges, { initialValue: 0 });
  rollSig = toSignal(this.roll.valueChanges, {
    initialValue: 0,
  });

  form = new FormGroup({ db: this.db, roll: this.roll });

  dbAllSig = computed(() => this.dbSig() + this.rollSig() * this.rollSize());

  sumSig = computed(() => this.dbAllSig() * this.moneyBaseValue());

  constructor() {
    effect(() => {
      this.sumEvent.emit(
        new Money(
          this.moneyBaseValue(),
          this.rollSize(),
          this.dbSig(),
          this.rollSig(),
          this.sumSig(),
          this.dbAllSig(),
        ),
      );
    });
    effect(() => {
      if (this.moneyBaseValue() > 200) {
        this.roll.disable({ emitEvent: false });
      } else {
        this.roll.enable({ emitEvent: false });
      }
    });
  }
}
