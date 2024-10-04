import { Injectable } from '@angular/core';
import { Gasto } from './gasto.model';
import { DataServices } from '../data.services';
import { Subject } from 'rxjs';

@Injectable()
export class GastoServicio {
  gastos: Gasto[] = [];
  public gastosCambio = new Subject<Gasto[]>();

  constructor(private dataService:DataServices){}

  setGasto(gastos:Gasto[]){
    this.gastos = gastos;
    this.gastosCambio.next(this.gastos); // Emitir los cambios a los suscriptores
  }

  obtenerGastos(){
    return this.dataService.cargarGastos();
  }

guardarGasto(gasto:Gasto){
  if (!this.gastos) {  // Asegurarse de que gastos no sea null
    this.gastos = [];
  }
  this.gastos.push(gasto);
  this.dataService.guardarGasto(this.gastos);
  this.gastosCambio.next(this.gastos); // Notificar que la lista ha cambiado
}

  eliminar(gasto: Gasto) {
    const indice: number = this.gastos.indexOf(gasto);
    this.gastos.splice(indice, 1);
  }
}
