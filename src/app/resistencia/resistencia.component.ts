import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  colors = [
    'dark',
    'brown',
    'danger',
    'orange',
    'warning',
    'success',
    'primary',
    'indigo',
    'gray',
    'light'
  ];

  tolerances = [
    'gold',
    'silver'
  ];

  banda1: string = "";
  banda2: string = "";
  banda3: string = "";
  tolerancia : string = "gold";
  valor: number = 0;
  min: number = 0;
  max: number = 0;
  
  calcularResistencia() {
    let resultado =  parseInt(`${this.colors.indexOf(this.banda1)}${this.colors.indexOf(this.banda2)}`) * parseInt(`1${'0'.repeat(this.colors.indexOf(this.banda3))}`);
    this.min = resultado - (resultado * (this.tolerancia === 'gold' ? 0.05 : 0.1));
    this.max = resultado + (resultado * (this.tolerancia === 'gold' ? 0.05 : 0.1));
    this.valor = resultado;
  }
  
}
