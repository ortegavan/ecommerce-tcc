import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    {
        path: 'users',
        loadComponent: () =>
            import('@ecommerce/user-list').then((r) => r.UsersComponent),
    },
];
