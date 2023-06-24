import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  numX1 : number = 0.0;
  numY1 : number = 0.0;
  numX2 : number = 0.0;
  numY2 : number = 0.0;
  resultado : number = 0.0;
  
  calcularDistancia(){
    if(this.numX1 == null && this.numX2 == null && this.numY2 == null && this.numY1 == null){
      this.resultado = 0.0;
    } else {
    this.resultado = Math.sqrt(Math.pow(this.numX2 - this.numX1, 2) + Math.pow(this.numY2 - this.numY1, 2))
    }
  }
}
