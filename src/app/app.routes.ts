import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FaqComponent } from '../faq/faq.component';

export const routes: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  { path: 'v1', component: AppComponent },
  { path: 'v2', component: AppComponent },
  { path: 'faq', component: FaqComponent },
];
