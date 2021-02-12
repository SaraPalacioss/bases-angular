import { Component } from '@angular/core';

interface Personaje {
  nombre: String,
  poder: Number
};

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder:14000
  };

  agregrar() {
    console.log(this.nuevo);
  };
};
