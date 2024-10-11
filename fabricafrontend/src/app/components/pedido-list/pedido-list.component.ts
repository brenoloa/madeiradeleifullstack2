import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';
import { CommonModule } from '@angular/common';
// Importe os módulos do Angular Material necessários
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pedido-list',
  standalone: true,
  imports: [CommonModule, MatTableModule], // Inclua MatTableModule
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css'],
})
export class PedidoListComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }
}
