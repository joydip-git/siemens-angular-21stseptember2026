import { Component, signal } from '@angular/core';
import { ProductContainer } from '../products/components/product-container/product-container';

@Component({
  selector: 'app-root',
  imports: [ProductContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pms-app');
}
