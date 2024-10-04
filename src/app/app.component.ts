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

  ngOnInit() {
    this.ingresoServicio.obtenerIngreso()
    .subscribe(
      (ingresos : Ingreso[]) => {
        this.ingresos = ingresos;
        this.ingresoServicio.setIngreso(ingresos);
      }
    );

    this.gastoServicio.obtenerGastos()
    .subscribe(
      (gastos: Gasto[]) => {
        this.gastos = gastos;
        this.gastoServicio.setGasto(gastos);
      }
    )
  }

  constructor(
    private ingresoServicio: IngresoServicio,
    private gastoServicio: GastoServicio
  ) {}

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    if (this.ingresos && this.ingresos.length > 0) {  // Verifica si hay ingresos
      this.ingresos.forEach((ingreso) => {
        ingresoTotal += ingreso.valor;
      });
    }
    return ingresoTotal;
  }

  getGastoTotal() {
    let gastoTotal: number = 0;
    if (this.gastos && this.gastos.length > 0) {  // Verifica si hay gastos
      this.gastos.forEach((gasto) => {
        gastoTotal += gasto.valor;
      });
    }
    return gastoTotal;
  }

  getPorcentajeTotal() {
    return this.getGastoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getGastoTotal();
  }
}
