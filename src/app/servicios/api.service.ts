import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlItems = 'https://api.mercadolibre.com/sites/MCO/search?q=';
  private urlCategorias =
    'https://api.mercadolibre.com/sites/MCO/search?category=';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer NMaEapX6CAvGF4wijG8ODM4NFnI4dUVe',
  });

  constructor(private http: HttpClient) {}

  public getCategoria(busqueda: string): Promise<any> {
    var urlBusqueda = this.urlCategorias + busqueda + '&limit=4';
    return this.http
      .get(urlBusqueda, { headers: this.httpHeaders })
      .toPromise();
  }

  public getBusqueda(busqueda: string): Promise<any> {
    var urlBusqueda = this.urlItems + busqueda;
    return this.http
      .get(urlBusqueda, { headers: this.httpHeaders })
      .toPromise();
  }
}
