import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgxCurrencyModule } from 'ngx-currency';

import { NavComponent } from './shared/nav/nav.component';

import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './interceptors/jwt.interceptor';

import { PalestrantesComponent } from './componente/palestrantes/palestrantes.component';
import { PalestranteListaComponent } from './componente/palestrantes/palestrante-lista/palestrante-lista.component';
import { PalestranteDetalheComponent } from './componente/palestrantes/palestrante-detalhe/palestrante-detalhe.component';
import { EventosComponent } from './componente/eventos/eventos.component';
import { EventoListaComponent } from './componente/eventos/evento-lista/evento-lista.component';
import { EventosDetalheComponent } from './componente/eventos/eventos-detalhe/eventos-detalhe.component';
import { PerfilComponent } from './componente/user/perfil/perfil.component';
import { PerfilDetalheComponent } from './componente/user/perfil/perfil-detalhe/perfil-detalhe.component';
import { RedesSociaisComponent } from './componente/redesSociais/redesSociais.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { HomeComponent } from './componente/home/home.component';
import { ContatosComponent } from './componente/contatos/contatos.component';

import { AppComponent } from './app.component';

import { UserComponent } from './componente/user/user.component';
import { LoginComponent } from './componente/user/login/login.component';
import { RegistrationComponent } from './componente/user/registration/registration.component';

import { EventoService } from './services/evento.service';
import { LoteService } from './services/lote.service';

import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { AccountService } from './services/account.service';

defineLocale('pt', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    EventosComponent,
    PalestrantesComponent,
    PalestranteListaComponent,
    PalestranteDetalheComponent,
    PerfilComponent,
    PerfilDetalheComponent,
    RedesSociaisComponent,
    TituloComponent,
    DashboardComponent,
    NavComponent,
    DateTimeFormatPipe,
    EventosDetalheComponent,
    EventoListaComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
   ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
        timeOut: 4000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        progressBar: true
    }),
    TabsModule.forRoot(),
    NgxSpinnerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxCurrencyModule,
    PaginationModule.forRoot(),
    ],

  providers: [
    EventoService,
    LoteService,
    AccountService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],

  bootstrap: [AppComponent],
})

export class AppModule {}

