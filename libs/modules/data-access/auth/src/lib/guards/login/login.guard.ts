import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

export function loginGuard() {
    return () => {
        const router = inject(Router);
        const email$ = inject(AuthService).email$;

        return email$.pipe(
            map((email) => (email ? true : router.createUrlTree(['/', 'auth'])))
        );
    };
}
