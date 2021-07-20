import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  public cart: any = [];
  public contador: number = 0;

  constructor(private http: HttpClient) {}

  public getBusqueda(busqueda: string, parametro: string): Promise<any> {
    var urlBusqueda = '';
    if (parametro == 'categoria') {
      urlBusqueda = this.urlCategorias + busqueda + '&limit=6';
    } else if (parametro == 'busqueda') {
      urlBusqueda = this.urlItems + busqueda;
    }
    return this.http
      .get(urlBusqueda, { headers: this.httpHeaders })
      .toPromise();
  }

  public masPublicaciones(busqueda: string): Promise<any> {
    var urlBusqueda = '';
    console.log(busqueda);

    this.contador += 51;
    urlBusqueda = `${this.urlCategorias + busqueda}&offset=${this.contador}`;
    return this.http
      .get(urlBusqueda, { headers: this.httpHeaders })
      .toPromise();
  }
}
