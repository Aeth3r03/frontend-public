import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Categoria } from "../models/categoria";
import { Producto } from "../models/producto";

@Injectable({ providedIn: 'root' })
export class CategoriaService {
    private apiUrl = `${environment.apiUrl}/categorias`;

    constructor(private http: HttpClient) {}

    listar(nombre?: string): Observable<Categoria[]> {
        const url = nombre ? `${this.apiUrl}/?nombre=${nombre}`: `${this.apiUrl}/`;
        return this.http.get<Categoria[]>(url);
    }

    listarProductosEnCategoria(categoriaId: number, skip = 0, limit = 100): Observable<Producto[]> {
        const url = `${this.apiUrl}/${categoriaId}/?skip=${skip}&limit=${limit}`;
        return this.http.get<Producto[]>(url)
    }
}