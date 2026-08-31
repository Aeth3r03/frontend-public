import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { CategoriaDetalle } from './pages/categoria-detalle/categoria-detalle';

export const routes: Routes = [
    { path: '', component: Catalogo },
    { path: 'categorias/:id', component: CategoriaDetalle}
];
