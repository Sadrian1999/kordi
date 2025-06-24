import { Component, computed, inject, signal } from '@angular/core';
import { DataService } from '../data-service';
import { DataType } from '../data-type';

@Component({
  selector: 'app-calculations',
  imports: [],
  templateUrl: './calculations.html',
  styleUrl: './calculations.scss'
})
export class Calculations {
  dataService = inject(DataService);
  valuesSig = signal<DataType>(this.dataService.getData());

  subSumSig = computed(() => (
    500000 +
    this.valuesSig()['sum'] +
    this.valuesSig()['coupon'] +
    this.valuesSig()['card'] +
    this.valuesSig()['pcOut']+
    this.valuesSig()['bill'] +
    this.valuesSig()['order']
  ));

  finalDiffSig = computed(() => (
    this.subSumSig() -
    this.valuesSig()['prevDay'] -
    this.valuesSig()['pcIn'] -
    this.valuesSig()['skim'] -
    this.valuesSig()['changeOut'] -
    this.valuesSig()['lepedo']
  ));
}

