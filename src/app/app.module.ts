import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BotaoComponent } from './botao/botao.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { TableNameComponent } from './table-name/table-name.component';
import { FormAdicionarComponent } from './form-adicionar/form-adicionar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLateralComponent,
    BotaoComponent,
    BarraPesquisaComponent,
    TableNameComponent,
    FormAdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
