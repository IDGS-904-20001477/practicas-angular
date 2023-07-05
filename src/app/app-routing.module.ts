import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciaComponent } from './resistencia/resistencia.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [
  {path: '', redirectTo: '/CineComponent', pathMatch: 'full'},
  {path:'CineComponent', component: CineComponent},
  {path:'DistanciaComponent', component: DistanciaComponent},
  {path:'ResistenciaComponent', component: ResistenciaComponent},
  {path:'PizzaComponent', component: PizzaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
