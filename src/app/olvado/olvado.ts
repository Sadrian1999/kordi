import { Component } from '@angular/core';
import { OlvadoRow } from '../olvado-row/olvado-row';
import { OlvadoType } from './olvado-row-type';

@Component({
  selector: 'app-olvado',
  imports: [OlvadoRow],
  templateUrl: './olvado.html',
  styleUrl: './olvado.scss'
})
export class Olvado {
  rows: OlvadoType[] = [];

}
