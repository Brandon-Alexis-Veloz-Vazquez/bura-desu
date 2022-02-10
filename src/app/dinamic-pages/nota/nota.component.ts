import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveCard } from 'src/app/models/liveCard.model';

@Component({
  selector: 'nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit {
  mobileQuery: MediaQueryList;
  public liveCard: LiveCard;

  private _mobileQueryListener: () => void;

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.liveCard = {
      logo: "../assets/img/UltimateToothLogo.png",
      fondo: "../assets/img/banner-test.jpg",
      titulo: "",
      entidadID: 0
    };
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }

  redireccion(tipo: number) {
    switch(tipo) {
      case 1:
        this.router.navigate(['home/inicio']);
      break;
      default:
        this.router.navigate(['home/inicio']);
      break;
    }
  }
}