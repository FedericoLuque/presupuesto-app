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
  }

  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoServicio.eliminar(ingreso);
  }
}
