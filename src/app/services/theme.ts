import { Injectable, signal } from '@angular/core'

@Injectable({ providedIn: 'root'})
export class ThemeService {
    oscuro = signal<boolean>(localStorage.getItem('tema') === 'oscuro');

    constructor() {
        this.aplicar();
    }

    alternar(): void {
        this.oscuro.set(!this.oscuro());
        localStorage.setItem('tema', this.oscuro() ? 'oscuro' : 'claro');
        this.aplicar();
    }

    private aplicar(): void {
        document.documentElement.classList.toggle('dark', this.oscuro());
    }
}