import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './distancia/distancia.module';
import { ResistenciaModule } from './resistencia/resistencia.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DistanciaModule,
    ResistenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
