import { Component, OnInit } from '@angular/core';
import { Material } from '../../models/material';
import { MaterialService } from '../../services/material.service';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css'],
})
export class MaterialFormComponent implements OnInit {
  material: Material = {
    id: 0,
    nome: '',
    quantidade: 0,
  };
  materialForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl(0, Validators.required),
  });

  constructor(
    private materialService: MaterialService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.materialForm.valid) {
      this.materialService.createMaterial(this.materialForm.value).subscribe(
        () => {
          this.location.back();
        },
        (error) => {
          console.error('Erro ao criar material:', error);
        }
      );
    } else {
      this.materialForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.location.back();
  }
}
