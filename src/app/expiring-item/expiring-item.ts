import { Component, output } from '@angular/core';

@Component({
  selector: 'app-expiring-item',
  imports: [],
  templateUrl: './expiring-item.html',
  styleUrl: './expiring-item.scss'
})
export class ExpiringItem {
  incEvent = output();

  increment () {
    this.incEvent.emit();
  }
}
