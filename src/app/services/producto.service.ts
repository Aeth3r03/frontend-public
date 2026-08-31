import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Producto } from "../models/producto";

@Injectable({ providedIn: 'root' }) 
export class ProductoService {
    private apiUrl = `${environment.apiUrl}/productos`;

    constructor(private http: HttpClient) {}

    listarProductos(nombre?: string): Observable<Producto[]> {
        const url = nombre ? `${this.apiUrl}/?nombre=${nombre}` : `${this.apiUrl}/`;
        return this.http.get<Producto[]>(url);
    }
}