import { Component, HostListener } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [NavBarComponent, RouterModule, CommonModule],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  backgroundClass: string = 'bg-custom-color';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const middle = totalHeight / 2;
    const nearBottom = totalHeight - 200; // Ajuste para el footer

    if (scrollPosition === 0) {
      this.backgroundClass = 'bg-custom-color'; // 🔹 Recupera el color inicial al volver arriba
    } else if (scrollPosition < middle) {
      this.backgroundClass = 'bg-white'; // 🔹 Cambia a blanco en la mitad
    } else if (scrollPosition >= middle && scrollPosition < nearBottom) {
      this.backgroundClass = 'bg-white'; // 🔹 Mantiene blanco
    } else {
      this.backgroundClass = 'bg-custom-color'; // 🔹 Vuelve al color original en el footer
    }
  }
}
