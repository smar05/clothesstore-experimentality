import { ApiService } from 'src/app/servicios/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public publicacionesDestacadas: any = [];
  public loading = true;
  public categoria = 'MCO1430';

  constructor(private servicio: ApiService) {}

  ngOnInit(): void {
    this.buscarProductos();
  }

  public buscarProductos(): void {
    this.servicio
      .getBusqueda(this.categoria.replace(/ /gi, '%20'), 'categoria')
      .then((data) => {
        this.publicacionesDestacadas = data.results;
        console.log(data);
        this.loading = false;
      })
      .catch((err) => {
        console.log(err.status);
        alert('Error Status: ' + err.status);
      });
  }
}
