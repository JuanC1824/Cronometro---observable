import { Routes } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';

export const routes: Routes = [
  { path: 'cronometro', component: CronometroComponent },
  { path: '', redirectTo: '/cronometro', pathMatch: 'full' }
];
