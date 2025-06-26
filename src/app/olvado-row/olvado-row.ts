import { Component, output, signal } from '@angular/core';
import { OlvadoType } from '../olvado/olvado-row-type';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-olvado-row',
  imports: [ReactiveFormsModule],
  templateUrl: './olvado-row.html',
  styleUrl: './olvado-row.scss'
})
export class OlvadoRow {
  addEvent = output<OlvadoType>();

  name = new FormControl<string>("");
  db = new FormControl<number>(0);
  dbPerContainer = new FormControl<number>(0);
  yesterdaySold= new FormControl<number>(0);
  lastWeekTommorowSold = new FormControl<number>(0);
  todaySold = new FormControl<number>(0);
  lastWeekTodaySold = new FormControl<number>(0);

  form = new FormGroup({
    name: this.name,
    db: this.db,
    dbPerContainer: this.dbPerContainer,
    yesterdaySold: this.yesterdaySold,
    lastWeekTommorowSold: this.lastWeekTommorowSold,
    todaySold: this.todaySold,
    lastWeekTodaySold: this.lastWeekTodaySold
  });

  neededSig = signal<number|string>(0);

  nameSig = toSignal(this.name.valueChanges, {initialValue: ""});
  dbSig = toSignal(this.db.valueChanges, {initialValue: 0});
  dbPerContainerSig = toSignal(this.dbPerContainer.valueChanges, {initialValue: 0});
  yesterdaySoldSig = toSignal(this.yesterdaySold.valueChanges, {initialValue: 0});
  lastWeekTommorowSoldSig = toSignal(this.lastWeekTommorowSold.valueChanges, {initialValue: 0});
  todaySoldSig = toSignal(this.todaySold.valueChanges, {initialValue: 0});
  lastWeekTodaySoldSig  = toSignal(this.lastWeekTodaySold.valueChanges, {initialValue: 0});

  add(){
    const olvado = new OlvadoType();
    olvado.name = this.nameSig()!;
    olvado.dbperContainer = this.dbPerContainerSig()!;
    olvado.db = this.dbSig()!;
    olvado.yesterdaySold = this.yesterdaySoldSig()!;
    olvado.lastWeekTommorowSold = this.lastWeekTommorowSoldSig()!;
    olvado.todaySold = this.todaySoldSig()!;
    olvado.lastWeekTodaySold = this.lastWeekTodaySoldSig()!;

    const needed = olvado.calculateNeeded() > 0 ? Math.round(olvado.calculateNeeded()) : "Nem kell";
    this.neededSig.update(v => v = needed);
    this.addEvent.emit(olvado);
  }

}
