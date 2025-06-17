import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RovancsBase } from "./rovancs-base";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'koordi-app';
}
