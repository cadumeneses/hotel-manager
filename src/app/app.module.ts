import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { ClientesModule } from './clientes/clientes.module';
import { CoreModule } from './Core/core.module';
import { FornecedoresModule } from './fornecedores/fornecedor.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    FornecedoresModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'clientes', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
