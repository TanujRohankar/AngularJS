import { Routes } from '@angular/router';
import { RegisterComponent } from './membership/register/register.component';
import { SignInComponent } from './membership/sign-in/sign-in.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }
];
