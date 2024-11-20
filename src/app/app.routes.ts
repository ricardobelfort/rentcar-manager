import { Routes } from '@angular/router';
import { HomeComponent } from './pages/private/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/public/auth/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/public/auth/register/register.component').then((c) => c.RegisterComponent),
  },
  {
    path: 'recover',
    loadComponent: () => import('./pages/public/auth/recover/recover.component').then((c) => c.RecoverComponent),
  },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
];
