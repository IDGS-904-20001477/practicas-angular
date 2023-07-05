import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './distancia/distancia.module';
import { ResistenciaModule } from './resistencia/resistencia.module';
import { CineModule } from './cine/cine.module';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './pizza/pizza.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzaComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DistanciaModule,
    ResistenciaModule,
    CineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
