import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public counterValue: number = 0;

  increment(): void {
    this.counterValue += 1;
  }

  decrement(): void {
    this.counterValue -= 1;
  }
}
