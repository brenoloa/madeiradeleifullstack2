import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { environment } from "../environments/environment";

const API_URL = `${environment.apiUrl}/api/pedidos/`;

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(API_URL);
  }

  getPedido(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${API_URL}${id}`);
  }

  createPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(API_URL, pedido);
  }

  approvePedido(id: number): Observable<void> {
    return this.http.put<void>(`${API_URL}${id}/aprovar`, {});
  }

  rejectPedido(id: number): Observable<void> {
    return this.http.put<void>(`${API_URL}${id}/rejeitar`, {});
  }
}
