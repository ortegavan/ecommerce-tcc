import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';

@Component({
    standalone: true,
    imports: [RouterModule, LayoutModule],
    selector: 'ecommerce-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'e-Commerce Admin';
}
