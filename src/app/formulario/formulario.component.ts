import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { GastoServicio } from '../gasto/gasto.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Gasto } from '../gasto/gasto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(
    private ingresoSevicio: IngresoServicio,
    private gastoServicio: GastoServicio
  ) {}

  tipoOperacion(evento: Event) {
    const target = evento.target as HTMLSelectElement;
    this.tipo = target.value;
  }

  agregarValor() {
    if(this.tipo === "ingresoOperacion")
      this.ingresoSevicio.guardarIngreso(new Ingreso(this.descripcionInput, this.valorInput));
    else
    this.gastoServicio.guardarGasto(new Gasto(this.descripcionInput, this.valorInput));
  }
}
