import { Injectable } from "@angular/core";
import { DataServices } from "../data.services";
import { Ingreso } from "./ingreso.model";
import { Subject } from 'rxjs';

@Injectable()
export class IngresoServicio{

constructor(private dataService:DataServices){}

    ingresos:Ingreso[]=[];
    public ingresoCambio = new Subject<Ingreso[]>();

    setIngreso(ingreso:Ingreso[]){
        this.ingresos = ingreso;
        this.ingresoCambio.next(this.ingresos); // Emitir los cambios a los suscriptores
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
        this.ingresoCambio.next(this.ingresos); // Notificar que la lista ha cambiado
    }



    eliminar(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}