import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@ecommerce/product-data-access';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'ecommerce-product-card',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
    @Input() product!: Product;
    @Input() showAddToCart = true;
    @Output() addToCart = new EventEmitter<Product>();

    onAddToCart(product: Product, event: MouseEvent) {
        event.stopPropagation();
        this.addToCart.emit(product);
    }
}
