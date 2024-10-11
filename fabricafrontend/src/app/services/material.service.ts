import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material';
import { environment } from '../environments/environment';

const API_URL = `${environment.apiUrl}/api/materiais/`;

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  constructor(private http: HttpClient) {}

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(API_URL);
  }

  getMaterial(id: number): Observable<Material> {
    return this.http.get<Material>(`${API_URL}${id}`);
  }

  createMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(API_URL, material);
  }

  updateMaterial(id: number, material: Material): Observable<Material> {
    return this.http.put<Material>(`${API_URL}${id}`, material);
  }

  deleteMaterial(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}${id}`);
  }
}
