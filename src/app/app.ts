import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RovancsBase } from "./rovancs-base/rovancs-base";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RovancsBase],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'koordi-app';
}
