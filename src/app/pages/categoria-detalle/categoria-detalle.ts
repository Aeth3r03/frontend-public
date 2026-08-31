import { Component, OnInit, signal } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Producto } from '../../models/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoCard } from '../../shared/producto-card/producto-card';
import { RouterLink } from '@angular/router';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categoria-detalle',
  imports: [ProductoCard, RouterLink],
  templateUrl: './categoria-detalle.html',
  styleUrl: './categoria-detalle.css',
})
export class CategoriaDetalle implements OnInit{
  productos = signal<Producto[]>([]);
  cargando = signal(true);
  categoria = signal<Categoria | null>(null);

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.categoriaService.listar().subscribe({
      next: (data) => {
        const encontrada = data.find(c => c.id === id);
        this.categoria.set(encontrada ?? null);
      },
      error: (err) => console.error("Error al cargar la categoría: ", err),
    });

    this.categoriaService.listarProductosEnCategoria(id).subscribe({
        next: (data) =>{
          this.productos.set(data);
          this.cargando.set(false)
        },
        error: (err) => {
          console.error("Error a cargar los productos: ", err );
          this.cargando.set(false)
        }
    })
  }
}
