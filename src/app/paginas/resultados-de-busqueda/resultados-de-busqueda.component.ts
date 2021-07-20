import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resultados-de-busqueda',
  templateUrl: './resultados-de-busqueda.component.html',
  styleUrls: ['./resultados-de-busqueda.component.css'],
})
export class ResultadosDeBusquedaComponent implements OnInit {
  public publicaciones: any = [];
  public busqueda: any = '';
  public loading: boolean = true;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.buscarProductos();
  }

  public buscarProductos(): void {
    if (this.route.snapshot.paramMap.get('busqueda') != '') {
      this.busqueda = this.route.snapshot.paramMap.get('busqueda');
      this.apiService
        .getBusqueda(this.busqueda, 'busqueda')
        .then((data) => {
          this.publicaciones = data.results;
          console.log(data);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err.status);
          alert('Error Status: ' + err.status);
        });
    } else {
      this.router.navigate(['/home']);
    }
  }

  public masProductos(): void {
    if (this.busqueda != '') {
      this.apiService
        .masPublicaciones(this.busqueda)
        .then((data) => {
          this.publicaciones.push.apply(data.results);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.status);
          alert('Error Status: ' + err.status);
        });
      this.loading = false;
    }
  }

  async agregarCarrito(publicacion: any) {
    const { value: cantidad } = await Swal.fire({
      title: 'Agregar al carrito',
      input: 'number',
      inputLabel: 'Ingrese la cantidad',
      inputPlaceholder: 'Ingrese la cantidad',
    });
    if (cantidad != null && cantidad > 0) {
      publicacion.cantidad = cantidad;
      this.apiService.cart.push(publicacion);
      Swal.fire(`Cantidad agregada: ${cantidad}`);
    } else {
      alert('Ingrese una cantidad');
    }
  }
}
