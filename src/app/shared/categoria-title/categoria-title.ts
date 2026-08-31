import { Component, Input, signal } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { Producto } from '../../models/producto';
import { CategoriaService } from '../../services/categoria.service';
import { RouterLink } from '@angular/router';

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
  private imagenesPlaceholder = [
    'https://images.unsplash.com/photo-1786057425168-1f326d4f47b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1573798484153-da43eda898f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1787585913070-a0c497a5ff28?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1784964279455-f0590dfb6694?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1783100974590-1a86aa1e2ab7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

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
    return this.imagenesPlaceholder[this.imageIndex % this.imagenesPlaceholder.length]
  }

  get textoProductos(): string {
    const total = this.totalProductosEnCategoria;
    return total > 5 ? `${total}+ productos` : `${total} productos`;
  }
}
