import { Component, OnInit, signal  } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { CategoriaTitle } from "../../shared/categoria-title/categoria-title";

@Component({
  selector: 'app-catalogo',
  imports: [CategoriaTitle],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  categorias = signal<Categoria[]>([]);
  cargando = signal(true);

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.listar().subscribe({
      next: (data) => {
        this.categorias.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error("Error al cargar los productos: ", err);
        this.cargando.set(false);
      }
    });
  }
}
