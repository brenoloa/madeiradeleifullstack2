import { Component, OnInit } from '@angular/core';
import { Movel } from '../../models/movel';
import { MovelService } from '../../services/movel.service';
import { CommonModule } from '@angular/common';
// Importe os módulos do Angular Material necessários
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-movel-list',
  standalone: true,
  imports: [CommonModule, MatTableModule], // Inclua MatTableModule
  templateUrl: './movel-list.component.html',
  styleUrls: ['./movel-list.component.css'],
})
export class MovelListComponent implements OnInit {
  moveis: Movel[] = [];

  constructor(private movelService: MovelService) {}

  ngOnInit(): void {
    this.getMoveis();
  }

  getMoveis(): void {
    this.movelService.getMoveis().subscribe((moveis) => {
      this.moveis = moveis;
    });
  }
}
