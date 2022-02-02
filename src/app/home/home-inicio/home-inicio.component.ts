import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LiveCard } from 'src/app/models/liveCard.model';

@Component({
  selector: 'home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.scss']
})
export class HomeInicioComponent implements OnInit {
  mobileQuery: MediaQueryList;
  public liveCard: LiveCard;
  public banner: any = [];
  public mobileBanner: any = [];
  public items: any = [];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.liveCard = {
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Bura-desu",
      entidadID: 0
    };
    this.banner = [{"url": "https://i.picsum.photos/id/663/1920/300.jpg?hmac=HtdLRM2uxpmcYZmwEnUNKiMKzuBY099zx_OrQ5ey4uA"}, {"url": "https://i.picsum.photos/id/37/1920/300.jpg?hmac=1nnQb76FZnIBwkFshnSE6DSiifTQ3lSsyi1vIK7d_gI"}, {"url": "https://i.picsum.photos/id/999/1920/300.jpg?hmac=mwG7cr18fZwQtinzWxVR-4iEywwOyaMjdu1Ei1-Ymcs"}, {"url": "https://i.picsum.photos/id/447/1920/300.jpg?hmac=uirWaSnNkOpj_WPVBszP4nFed5PNnfq9CMKLnlp7Gkk"}, {"url": "https://i.picsum.photos/id/831/1920/300.jpg?hmac=z2zgkV5sVgY-5U2Eca4_9GuG0NE9wD42PqnNcPOEIX4"}];
    this.mobileBanner = this.banner;
    this.items = [{
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Elemento 1",
      entidadID: 0
    },{
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Elemento 1",
      entidadID: 0
    },{
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Elemento 1",
      entidadID: 0
    },{
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Elemento 1",
      entidadID: 0
    },{
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Elemento 1",
      entidadID: 0
    },{
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Elemento 1",
      entidadID: 0
    }];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }
}
