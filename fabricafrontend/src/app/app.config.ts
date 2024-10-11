import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

// Importe todos os componentes utilizados nas rotas
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { MovelListComponent } from './components/movel-list/movel-list.component';
import { MovelFormComponent } from './components/movel-form/movel-form.component';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'client-dashboard',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['cliente'] }
  },
  { path: 'material-list', component: MaterialListComponent },
  { path: 'material-form', component: MaterialFormComponent },
  { path: 'movel-list', component: MovelListComponent },
  { path: 'movel-form', component: MovelFormComponent },
  { path: 'pedido-list', component: PedidoListComponent },
  { path: 'pedido-form', component: PedidoFormComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), AuthGuard],
};
