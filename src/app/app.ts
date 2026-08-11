import { Component, signal } from '@angular/core';
import { Header } from "./shared/ui/header/header";

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'My Recipe Book';
}
