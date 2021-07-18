import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public mostrar: boolean;

  constructor() {
    this.mostrar = true;
  }

  ngOnInit(): void {}

  public mostrarMenu(): void {
    this.mostrar = !this.mostrar;
  }
}
