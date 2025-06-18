import { Component, computed, effect, input, output} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Response } from './denom-type';

@Component({
  selector: 'app-denom',
  imports: [ReactiveFormsModule],
  templateUrl: './denom.html',
  styleUrl: './denom.scss'
})

export class Denom {
  value = input<number>(0);
  size = input<number>(0);

    sumEvent = output<Response>();

  db: FormControl = new FormControl<number>(0, { nonNullable: true });
  roll: FormControl = new FormControl<number>(0, { nonNullable: true });
  dbSig = toSignal(this.db.valueChanges, { initialValue: this.db.value});
  rollSig = toSignal(this.roll.valueChanges, { initialValue: this.roll.value});
  form = new FormGroup({ db: this.db, roll: this.roll });
  sumSig = computed(() =>
    (this.dbSig() + this.rollSig() * this.size()) * this.value()
  );

  constructor() {
    effect(() => {
      this.sumEvent.emit(
        {
          value: this.value(),
          sum: this.sumSig()
        }
      )
    });
    effect(() => {
      if (this.value() > 200) {
        this.roll.disable({ emitEvent: false });
      } else {
        this.roll.enable({ emitEvent: false });
      }
    });
  }
}
