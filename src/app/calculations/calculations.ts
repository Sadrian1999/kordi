import { Component, computed, effect, input } from '@angular/core';
import { SheetValues, StrongBoxValues } from '../data-service';

@Component({
  selector: 'app-calculations',
  imports: [],
  templateUrl: './calculations.html',
  styleUrl: './calculations.scss',
})
export class Calculations {
  strongBoxData = input.required<StrongBoxValues>();
  sheetData = input.required<SheetValues>();
  sumSig = input.required<number>();

  subSumSig = computed(
    () =>
      this.sheetData().cassaTotal +
      this.sumSig() +
      this.sheetData().coupon +
      this.sheetData().card +
      this.sheetData().pcOut +
      this.sheetData().bill +
      this.sheetData().order,
  );

  finalDiffSig = computed(
    () =>
      this.subSumSig() -
      this.sheetData().prevDay -
      this.sheetData().pcIn -
      this.sheetData().skim -
      this.sheetData().change -
      this.sheetData().sheet +
      this.sheetData().euro,
  );
}
