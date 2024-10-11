import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material';
import { CommonModule } from '@angular/common';
// Importe os módulos do Angular Material necessários
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-material-list',
  standalone: true,
  imports: [CommonModule, MatTableModule], // Inclua MatTableModule aqui
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css'],
})
export class MaterialListComponent implements OnInit {
  materiais: Material[] = [];

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.getMaterials();
  }

  getMaterials(): void {
    this.materialService.getMaterials().subscribe((materiais) => {
      this.materiais = materiais;
    });
  }
}
