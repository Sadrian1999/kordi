import { Component, signal } from '@angular/core';
import { OlvadoRow } from '../olvado-row/olvado-row';
import { OlvadoType } from './olvado-row-type';

@Component({
  selector: 'app-olvado',
  imports: [OlvadoRow],
  templateUrl: './olvado.html',
  styleUrl: './olvado.scss'
})
export class Olvado {
  rowsSig = signal<OlvadoType[]>([]);

  add(value: OlvadoType) {
    this.rowsSig.update(rows => [...rows, value]);
  }


}
