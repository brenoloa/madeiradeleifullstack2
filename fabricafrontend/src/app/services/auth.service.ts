import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Correção no caminho

const AUTH_API = `${environment.apiUrl}/api/auth/`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', credentials);
  }

  signup(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', user);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    // Implemente a lógica para verificar se o usuário é administrador,
    // por exemplo, verificando uma propriedade no token JWT
    return false;
  }
}
