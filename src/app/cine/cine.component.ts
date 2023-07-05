import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletos: number = 0;
  total: number = 0;
  seleccionado: string = 'si';
  error : string = '';

  realizarVenta() {
    this.total = 0;
    this.error = '';
    if (this.cantidadBoletos <= this.cantidadCompradores*7) {
      if (this.cantidadBoletos > 5) {
        const subtotal = this.cantidadBoletos * 12;
        const descuento = subtotal * 0.15;
        this.total = subtotal - descuento;
      } else if (this.cantidadBoletos >= 3 && this.cantidadBoletos <= 5) {
        const subtotal = this.cantidadBoletos * 12;
        const descuento = subtotal * 0.1;
        this.total = subtotal - descuento;
      } else if (this.cantidadBoletos <= 2) {
        this.total = this.cantidadBoletos * 12;
      }
    } else {
      this.error = "Máximo 7 boletos por persona";
    }

    if (this.seleccionado == "si") {
      const descuentoTarjeta = this.total * 0.1;
      this.total -= descuentoTarjeta;
    }

    this.total;
  }
}
