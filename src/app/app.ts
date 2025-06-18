import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RovancsBase } from "./rovancs-base/rovancs-base";
import { Lepedo } from './lepedo/lepedo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RovancsBase, Lepedo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'koordi-app';
}
