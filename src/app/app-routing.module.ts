import { ShoppingCartComponent } from './paginas/shopping-cart/shopping-cart.component';
import { ResultadosDeBusquedaComponent } from './paginas/resultados-de-busqueda/resultados-de-busqueda.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'resultados-de-busqueda/:categoria/:busqueda',
    component: ResultadosDeBusquedaComponent,
  },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
