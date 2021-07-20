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
  private urlBusqueda: string = '';

  constructor(private http: HttpClient) {}

  public getBusqueda(busqueda: string, parametro: string): Promise<any> {
    this.urlBusqueda = '';
    if (parametro == 'home') {
      this.urlBusqueda = this.urlCategorias + busqueda + '&limit=6';
    } else if (parametro == 'otros') {
      this.urlBusqueda = this.urlItems + busqueda;
    } else if (parametro == 'MCO1430') {
      this.urlBusqueda = this.urlItems + busqueda + '&category=' + parametro;
    }
    return this.http
      .get(this.urlBusqueda, { headers: this.httpHeaders })
      .toPromise();
  }

  public masPublicaciones(): Promise<any> {
    this.contador += 51;
    this.urlBusqueda += `&offset=${this.contador}`;
    return this.http
      .get(this.urlBusqueda, { headers: this.httpHeaders })
      .toPromise();
  }
}
