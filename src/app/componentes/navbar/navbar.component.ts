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
      this.irCatalogo('otros', this.buscar.replace(/ /gi, '%20'));
    } else {
      alert('Ingrese una busqueda');
    }
  }

  public categoria(dato: string): void {
    this.buscar = '';
    this.mostrarMenu();
    this.irCatalogo('MCO1430', dato);
  }

  public irCatalogo(categoria: string, busqueda: string): void {
    this.router.navigate(['/resultados-de-busqueda', categoria, busqueda]);
  }

  public irCarrito(): void {
    this.mostrarMenu();
    this.router.navigate(['/shopping-cart']);
  }
}
