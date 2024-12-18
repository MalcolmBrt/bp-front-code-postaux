import { Routes } from '@angular/router';
import { V1Component } from '../v1/v1.component';
import { V2Component } from '../v2/v2.component';
import { V3Component } from '../v3/v3.component';
import { FaqComponent } from '../faq/faq.component';

export const routes: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  { path: 'v1', component: V1Component },
  { path: 'v2', component: V2Component },
  { path: 'v3', component: V3Component },
  { path: 'faq', component: FaqComponent },
];
