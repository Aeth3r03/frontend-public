import { Component, Input, signal } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { Producto } from '../../models/producto';
import { CategoriaService } from '../../services/categoria.service';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-categoria-title',
  imports: [RouterLink],
  templateUrl: './categoria-title.html',
  styleUrl: './categoria-title.css',
})
export class CategoriaTitle {
  @Input({ required: true}) categoria!: Categoria;
  @Input() colorIndex: number = 0;
  @Input() imageIndex: number = 0;
  productos = signal<Producto[]>([])
  private paleta = ['bg-primary/10', 'bg-accent/10', 'bg-purple-border/10', 'bg-line', 'bg-red-border/10'];
  private imagenPlaceholder = '/imagenes/categoria-placeholder.jpg';

  constructor(private categoriaService: CategoriaService) {};

  ngOnInit(): void {
    this.categoriaService.listarProductosEnCategoria(this.categoria.id).subscribe({
      next: (productos) => this.productos.set(productos),
    });
  }

  get totalProductosEnCategoria(): number {
    return this.productos().length;
  }

  get color(): string {
    return this.paleta[this.colorIndex % this.paleta.length]
  }

  get imageUrl(): string {
    if (this.categoria.imagen_url) {
      return environment.backendUrl + this.categoria.imagen_url;
    }
    return this.imagenPlaceholder;
  }

  get textoProductos(): string {
    const total = this.totalProductosEnCategoria;
    return total > 5 ? `${total}+ productos` : `${total} productos`;
  }
}
