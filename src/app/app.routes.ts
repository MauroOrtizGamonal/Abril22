import { Routes } from '@angular/router';
import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';
import { InformacionExtendidaComponent } from './informacion-extendida/informacion-extendida.component';

export const routes: Routes = [
  { path: 'inicio', component: VistaInicialComponent },
  { path: 'informacion-extendida', component: InformacionExtendidaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

export class AppRoutingModule { }
