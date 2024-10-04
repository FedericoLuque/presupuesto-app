import { Injectable } from "@angular/core";
import { DataServices } from "../data.services";
import { Ingreso } from "./ingreso.model";

@Injectable()
export class IngresoServicio{

constructor(private dataService:DataServices){}

    ingresos:Ingreso[]=[];

    setIngreso(ingreso:Ingreso[]){
        this.ingresos = ingreso;
    }

    obtenerIngreso(){
        return this.dataService.cargarIngresos();
    }

    guardarIngreso(ingreso:Ingreso){
        if (!this.ingresos) {  // Asegurarse de que ingresos no sea null
            this.ingresos = [];
          }
        this.ingresos.push(ingreso);
        this.dataService.guardarIngreso(this.ingresos);
    }

    eliminar(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}