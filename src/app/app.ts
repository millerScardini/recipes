import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/ui/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'My Recipe Book';
}
