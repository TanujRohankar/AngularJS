import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CounterComponent } from '../counter/counter.component';
import { CartService } from '../../../shopping-cart/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() product!: Product; // ✅ single product input

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
    alert(`${this.product.title} added to cart!`);
  }

  onUpdate(updatedLikes: number) {
    this.product.likes = updatedLikes;
  }
}
