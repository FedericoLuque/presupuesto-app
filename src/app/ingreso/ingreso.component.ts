import { Component } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css',
})
export class IngresoComponent {
  ingresos: Ingreso[] = [];

  constructor(private ingresoServicio: IngresoServicio) {}

  ngOnInit() {
    this.ingresoServicio.obtenerIngreso()
    .subscribe(
      (ingresos : Ingreso[]) => {
        this.ingresos = ingresos;
        this.ingresoServicio.setIngreso(ingresos);
      }
    )

          // Suscribirse a los cambios en gastos
          this.ingresoServicio.ingresoCambio.subscribe((ingresos: Ingreso[]) => {
            this.ingresos = ingresos; // Actualizar la lista de gastos
          });
  }



  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoServicio.eliminar(ingreso);
  }
}
