import { Component, signal } from '@angular/core';
import { ExpiringItem } from '../expiring-item/expiring-item';

@Component({
  selector: 'app-expiring-list',
  imports: [ExpiringItem],
  templateUrl: './expiring-list.html',
  styleUrl: './expiring-list.scss'
})
export class ExpiringList {
  countArr = signal<number[]>([1]);

  increment() {
    this.countArr.update(n => [...n, 1]);
    console.log(this.countArr().length)
  }
}
