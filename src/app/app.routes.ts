import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/auth/login/login.component';
import { RegisterComponent } from './pages/public/auth/register/register.component';
import { HomeComponent } from './pages/private/home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
