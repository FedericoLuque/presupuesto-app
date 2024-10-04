import { Injectable } from '@angular/core';
import { Gasto } from './gasto.model';
import { DataServices } from '../data.services';

@Injectable()
export class GastoServicio {
  gastos: Gasto[] = [];

  constructor(private dataService:DataServices){}

  setGasto(gastos:Gasto[]){
    this.gastos = gastos;
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
}

  eliminar(gasto: Gasto) {
    const indice: number = this.gastos.indexOf(gasto);
    this.gastos.splice(indice, 1);
  }
}
