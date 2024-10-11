import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movel } from '../models/movel';
import { environment } from '../environments/environment';

const API_URL = `${environment.apiUrl}/api/moveis/`;

@Injectable({
  providedIn: 'root',
})
export class MovelService {
  constructor(private http: HttpClient) {}

  getMoveis(): Observable<Movel[]> {
    return this.http.get<Movel[]>(API_URL);
  }

  getMovel(id: number): Observable<Movel> {
    return this.http.get<Movel>(`${API_URL}${id}`);
  }

  createMovel(movel: Movel): Observable<Movel> {
    return this.http.post<Movel>(API_URL, movel);
  }

  updateMovel(id: number, movel: Movel): Observable<Movel> {
    return this.http.put<Movel>(`${API_URL}${id}`, movel);
  }

  deleteMovel(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}${id}`);
  }
}
