import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';
import { MovelService } from '../../services/movel.service';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; // Importe o módulo MatSelectModule
import { Movel } from '../../models/movel';

@Component({
  selector: 'app-pedido-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule // Inclua o módulo MatSelectModule
  ],
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css'],
})
export class PedidoFormComponent implements OnInit {
  pedido: Pedido = {
    id: 0,
    movel: {
      id: 0,
      nome: '',
      materiais: {},
    },
    quantidade: 0,
    status: '',
  };
  pedidoForm: FormGroup = new FormGroup({
    movelId: new FormControl(0, Validators.required),
    quantidade: new FormControl(0, Validators.required),
  });

  moveis: Movel[] = []; // Propriedade para armazenar a lista de móveis

  constructor(
    private pedidoService: PedidoService,
    private movelService: MovelService, // Injete o MovelService
    private location: Location
  ) {}

  ngOnInit(): void {
    // Busque os móveis da API ao inicializar o componente
    this.movelService.getMoveis().subscribe(moveis => {
      this.moveis = moveis;
    });
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      const novoPedido: Pedido = {
        id: 0,
        movel: {
          id: this.pedidoForm.get('movelId')!.value,
          nome: '',
          materiais: {},
        },
        quantidade: this.pedidoForm.get('quantidade')!.value,
        status: '',
      };

      this.pedidoService.createPedido(novoPedido).subscribe(
        () => {
          this.location.back();
        },
        (error) => {
          console.error('Erro ao criar pedido:', error);
        }
      );
    } else {
      this.pedidoForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.location.back();
  }
}
