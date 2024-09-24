import { Component, Input } from '@angular/core';
import { GastoServicio } from './gasto.servicio';
import { Gasto } from './gasto.model';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrl: './gasto.component.css'
})
export class GastoComponent {

gastos:Gasto[]=[];
@Input() ingresoTotal:number;

constructor(private gastoServicio:GastoServicio){

}

ngOnInit() {
  this.gastos = this.gastoServicio.gastos;
}

eliminarGasto(gasto:Gasto){
  this.gastoServicio.eliminar(gasto);
}

calcularPorcentaje(gasto: Gasto){
  return gasto.valor/this.ingresoTotal;
}

}
