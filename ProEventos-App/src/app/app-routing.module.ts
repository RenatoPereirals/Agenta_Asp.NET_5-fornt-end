import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { PalestrantesComponent } from './componente/palestrantes/palestrantes.component';
import { EventosComponent } from './componente/eventos/eventos.component';
import { EventosDetalheComponent } from './componente/eventos/eventos-detalhe/eventos-detalhe.component';
import { EventoListaComponent } from './componente/eventos/evento-lista/evento-lista.component';

import { UserComponent } from './componente/user/user.component';
import { LoginComponent } from './componente/user/login/login.component';
import { RegistrationComponent } from './componente/user/registration/registration.component';
import { PerfilComponent } from './componente/user/perfil/perfil.component';

import { ContatosComponent } from './componente/contatos/contatos.component';

import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './componente/home/home.component';

const routes: Routes = [

  {
    path: 'user', redirectTo: 'user/perfil'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user/perfil', component: PerfilComponent
      },
      { path: 'eventos', redirectTo: 'eventos/lista' },
      {
        path: 'eventos', component: EventosComponent,
        children: [
          { path: 'detalhe/:id', component: EventosDetalheComponent },
          { path: 'detalhe', component: EventosDetalheComponent },
          { path: 'lista', component: EventoListaComponent },
        ],
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'palestrantes', component: PalestrantesComponent
      },
      {
        path: 'contatos', component: ContatosComponent
      },

    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
