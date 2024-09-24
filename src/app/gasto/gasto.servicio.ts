import { Gasto } from './gasto.model';

export class GastoServicio {
  gastos: Gasto[] = [new Gasto('Renta Depto', 900), new Gasto('Ropa', 200)];

  eliminar(gasto: Gasto) {
    const indice: number = this.gastos.indexOf(gasto);
    this.gastos.splice(indice, 1);
  }
}
