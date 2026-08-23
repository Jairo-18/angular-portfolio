import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  /** Automático: así el copyright no vuelve a quedarse desactualizado. */
  readonly currentYear = new Date().getFullYear();
}
