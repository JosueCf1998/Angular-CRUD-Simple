import { Component } from '@angular/core';
import { Empleados } from './models/empleados'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleadosArray: Empleados[] = [
    {id: 1, name: "Josue", country:"Peru"},
    {id: 2, name: "Martin", country:"Peru"},
    {id: 3, name: "Pepe", country:"Peru"}
  ];

}
