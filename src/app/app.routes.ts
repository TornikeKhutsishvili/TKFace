import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login')
        .then(m => m.Login)
    },

    {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/register')
        .then(m => m.Register)
    },

    {
        path: 'logout',
        loadComponent: () => import('./pages/auth/logout/logout')
        .then(m => m.Logout)
    },

    {
        path: 'error-page',
        loadComponent: () => import('./pages/error-page/error-page')
        .then(m => m.ErrorPage)
    },

    {
        path: '**',
        redirectTo: 'error-page'
    }

];
