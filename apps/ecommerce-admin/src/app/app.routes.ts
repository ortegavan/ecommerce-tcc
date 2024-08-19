import { Route } from '@angular/router';
import { loginGuard } from '@ecommerce/auth-data-access';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    {
        path: 'users',
        canActivate: [loginGuard()],
        loadComponent: () =>
            import('@ecommerce/user-list').then((r) => r.UsersComponent),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('@ecommerce/auth-form').then((r) => r.authFormRoutes),
    },
    {
        path: '**',
        redirectTo: 'users',
    },
];
