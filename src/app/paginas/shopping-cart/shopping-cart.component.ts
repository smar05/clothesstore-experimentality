import { ApiService } from 'src/app/servicios/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public cart: any = [];
  public total: number = 0;

  public formulario: FormGroup;

  constructor(private servicio: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      correo: '',
      celular: [null, Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
    });
    this.cart = this.servicio.cart;
    this.calcularTotal();
  }

  public eliminar(id: number): void {
    this.cart.splice(id, 1);
  }

  async modificarCantidad(id: number) {
    const { value: cantidad } = await Swal.fire({
      title: 'Agregar al carrito',
      input: 'number',
      inputLabel: 'Ingrese la cantidad',
      inputPlaceholder: 'Ingrese la cantidad',
    });

    if (cantidad != null && cantidad > 0) {
      Swal.fire(`Cantidad agregada: ${cantidad}`);
      this.cart[id].cantidad = cantidad;
      this.servicio.cart = this.cart;
    } else {
      this.cart[id].cantidad = 0;
      alert('Ingrese una cantidad');
    }
    this.calcularTotal();
  }

  public calcularTotal() {
    this.total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.total += this.cart[i].price * this.cart[i].cantidad;
    }
  }

  public solicitarPedido(): void {
    console.log(this.formulario);
    alert('Pedido solicitado');
    this.servicio.cart = this.cart = [];
    this.total = 0;
  }
}
