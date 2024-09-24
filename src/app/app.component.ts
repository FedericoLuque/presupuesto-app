import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Gasto } from './gasto/gasto.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { GastoServicio } from './gasto/gasto.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  gastos: Gasto[] = [];

  constructor(
    private ingresoServicio: IngresoServicio,
    private gastoServicio: GastoServicio
  ) {
    this.ingresos = ingresoServicio.ingresos;
    this.gastos = gastoServicio.gastos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getGastoTotal() {
    let gastoTotal: number = 0;
    this.gastos.forEach((gasto) => {
      gastoTotal += gasto.valor;
    });
    return gastoTotal;
  }

  getPorcentajeTotal() {
    return this.getGastoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getGastoTotal();
  }
}
