import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from './producto';

@Injectable({ providedIn: 'root'})
export class ProductoService {
  private apiUrl = `${environment.apiUrl}/productos`;

  constructor(private http: HttpClient) {}

  listar(nombre?: string): Observable<Producto[]> {
    const url = nombre ? `${this.apiUrl}/?nombre=${nombre}` : `${this.apiUrl}/`;
    return this.http.get<Producto[]>(url);
  }
}