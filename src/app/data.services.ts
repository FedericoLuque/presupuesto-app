import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gasto } from "./gasto/gasto.model";
import { Ingreso } from "./ingreso/ingreso.model";


@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}
    
    guardarGasto(gasto:Gasto[]){
    this.httpClient.put('https://presupuesto-fa6aa-default-rtdb.firebaseio.com/gastos.json', gasto)
    .subscribe({
        next: (response) => console.log('Gasto guardado: ' + response),
        error: (error) => console.log('Error al guardar el gasto: ' + error),
        complete: () => console.log('Peticion completada con éxito')
    });
    }

    guardarIngreso(ingreso:Ingreso[]){
        this.httpClient.put('https://presupuesto-fa6aa-default-rtdb.firebaseio.com/ingresos.json',ingreso)
        .subscribe({
            next: (response) => console.log('Ingreso guardado: ' + response),
            error: (error) => console.log('Error al guardar el ingreso: ' + error),
            complete: () => console.log('Peticion completada con éxito')
        });
    }

    cargarGastos(){
        return this.httpClient.get<Gasto[]>('https://presupuesto-fa6aa-default-rtdb.firebaseio.com/gastos.json')
    }

    cargarIngresos(){
        return this.httpClient.get<Ingreso[]>('https://presupuesto-fa6aa-default-rtdb.firebaseio.com/ingresos.json')
    }

}