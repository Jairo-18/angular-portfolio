import {
  Component,
  Inject,
  inject,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  private _iconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private readonly _router: Router = inject(Router);
  private _routerSubscription!: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this._setMaterialOutlinedIconsDefault();
    this._listenRouterChanges();
  }

  /**
   * Para que sean clasicos
   * @private
   */
  private _setMaterialOutlinedIconsDefault(): void {
    this._iconRegistry.setDefaultFontSetClass('material-icons');
  }

  /**
   * Para escuchar los cambios de rutas
   * @private
   */
  private _listenRouterChanges(): void {
    this._routerSubscription = this._router.events.subscribe((event): void => {
      if (event instanceof NavigationEnd) {
        this._setScrollOnTop();
      }
    });
  }

  /**
   * Para mover el scroll al inicio de la pagina
   * @private
   */
  private _setScrollOnTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }
}
