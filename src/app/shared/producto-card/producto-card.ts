import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html'
})
export class ProductoCard {
  @Input({ required: true }) producto!: Producto;
}
