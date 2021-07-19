import { ApiService } from 'src/app/servicios/api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public mostrar: boolean;
  public buscar: string = '';

  constructor(private router: Router) {
    this.mostrar = true;
  }

  ngOnInit(): void {}

  public mostrarMenu(): void {
    this.mostrar = !this.mostrar;
  }

  public hacerBusqueda(): void {
    if (this.buscar != '') {
      this.router.navigate([
        '/resultados-de-busqueda',
        this.buscar.replace(/ /gi, '%20'),
      ]);
    } else {
      alert('Ingrese una busqueda');
    }
  }
}
