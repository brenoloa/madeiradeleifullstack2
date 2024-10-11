import { Component, OnInit } from '@angular/core';
import { Movel } from '../../models/movel';
import { MovelService } from '../../services/movel.service';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Importe os módulos do Angular Material necessários
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-movel-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './movel-form.component.html',
  styleUrls: ['./movel-form.component.css'],
})
export class MovelFormComponent implements OnInit {
  movel: Movel = {
    id: 0,
    nome: '',
    materiais: {},
  };
  movelForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    // Adicione controles para materiais conforme necessário
  });

  constructor(
    private movelService: MovelService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.movelForm.valid) {
      // Construa o objeto 'movel' com os valores do formulário,
      // incluindo os materiais
      const novoMovel: Movel = {
        id: 0, // O ID será gerado pelo backend
        nome: this.movelForm.get('nome')!.value,
        materiais: this.movelForm.get('materiais')!.value, // Recupere os materiais do formulário
      };

      this.movelService.createMovel(novoMovel).subscribe(
        () => {
          this.location.back();
        },
        (error) => {
          console.error('Erro ao criar móvel:', error);
        }
      );
    } else {
      this.movelForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.location.back();
  }
}
