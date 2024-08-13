import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { CartComponent } from '@ecommerce/product-ui';
import { CartService } from '@ecommerce/product-data-access';
import { MatButtonModule } from '@angular/material/button';

@Component({
    standalone: true,
    imports: [
        RouterModule,
        LayoutModule,
        ProductSearchComponent,
        CartComponent,
        MatButtonModule,
    ],
    selector: 'ecommerce-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    quantity = inject(CartService).quantity;
}
