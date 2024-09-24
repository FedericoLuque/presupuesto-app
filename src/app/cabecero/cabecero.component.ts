import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

@Input() presupuestoTotal:number;
@Input() ingresoTotal:number;
@Input() gastoTotal:number;
@Input() porcentajeTotal:number;

}
