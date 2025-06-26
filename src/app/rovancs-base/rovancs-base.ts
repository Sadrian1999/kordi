import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { Denom } from '../denom/denom';
import { DenomType, Response } from '../denom/denom-type';
import { DataService } from '../data-service';

@Component({
  selector: 'app-rovancs-base',
  standalone: true,
  imports: [Denom],
  templateUrl: './rovancs-base.html',
  styleUrls: ['./rovancs-base.scss']
})

export class RovancsBase {
  denominations = [
    new DenomType(20000, 0),
    new DenomType(10000, 0),
    new DenomType(5000, 0),
    new DenomType(2000, 0),
    new DenomType(1000, 0),
    new DenomType(500, 0),
    new DenomType(200, 40),
    new DenomType(100, 20),
    new DenomType(50, 50),
    new DenomType(20, 50),
    new DenomType(10, 50),
    new DenomType(5, 50),
  ];

  sum = signal<number>(0);
  responses = signal<Response[]>([]);
  dataService = inject(DataService);

  calculateSum(response: Response) {
    let new_sum = 0;
    this.responses.update(arr => {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.value === response.value) {
          arr[i] = response;
          return arr;
        }
      }
      return [...arr, response];
    });

    this.responses().forEach(element => {
      new_sum += element.sum;
    })

    this.sum.update(n => n = new_sum)

    this.dataService.safeSig.set(this.responses());
    this.dataService.sumSig.set(this.sum());
  }
}
