import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveCard } from 'src/app/models/liveCard.model';


declare var particlesJS: any;
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

  constructor(private router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
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
    this.banner = [{ "url": "https://i.picsum.photos/id/663/1920/300.jpg?hmac=HtdLRM2uxpmcYZmwEnUNKiMKzuBY099zx_OrQ5ey4uA" }, { "url": "https://i.picsum.photos/id/37/1920/300.jpg?hmac=1nnQb76FZnIBwkFshnSE6DSiifTQ3lSsyi1vIK7d_gI" }, { "url": "https://i.picsum.photos/id/999/1920/300.jpg?hmac=mwG7cr18fZwQtinzWxVR-4iEywwOyaMjdu1Ei1-Ymcs" }, { "url": "https://i.picsum.photos/id/447/1920/300.jpg?hmac=uirWaSnNkOpj_WPVBszP4nFed5PNnfq9CMKLnlp7Gkk" }, { "url": "https://i.picsum.photos/id/831/1920/300.jpg?hmac=z2zgkV5sVgY-5U2Eca4_9GuG0NE9wD42PqnNcPOEIX4" }];
    this.mobileBanner = this.banner;
    this.items = [{
      logo: "",
      fondo: "https://i.picsum.photos/id/440/320/245.jpg?hmac=87PE9dZlRQSDfxD3dQJJGGH8Zptzn8gVoDXiDq3lXcI",
      titulo: "Elemento 1",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/692/320/245.jpg?hmac=PwVbKzqdJs5SSVlFlQh929-FujatYWg2HiY0d-YZ5m8",
      titulo: "Elemento 2",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/192/320/245.jpg?hmac=Z157YA14MDs4q-EuUe-IdTkYnqq4TaYPS82vdXm6H6E",
      titulo: "Elemento 3",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/141/320/245.jpg?hmac=FjmxpjQfJipYcY2K8N3ielpvARSi4IQbEsld_VUV-vk",
      titulo: "Elemento 4",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/421/320/245.jpg?hmac=KNVaEUMdqeezfOGrTdZ5_4hBFl2NX285vMI9fjJxacM",
      titulo: "Elemento 5",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/861/320/245.jpg?hmac=B58RdIDfdttl_N9xQcQzgI4f9qurWqcPFsll5CUgMvg",
      titulo: "Elemento 6",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/472/320/245.jpg?hmac=nLsH2OqQN2SIWkRxXXHjMc1bjJjqCUSMMo3V8mH2VP4",
      titulo: "Elemento 7",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/159/320/245.jpg?hmac=m30onW9yNJn0TGNloPYxMrwnW4zT5Wd0dvDkxwmybjw",
      titulo: "Elemento 8",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/374/320/245.jpg?hmac=1xQMGG1OMcVSC-JnO9j7cF-GxN35imflVdF83tWpjqw",
      titulo: "Elemento 9",
      entidadID: 0
    }, {
      logo: "",
      fondo: "https://i.picsum.photos/id/297/320/245.jpg?hmac=gaI2sM6JFd46ExWKmmxNu4usCbHl0jMqXDuLTzbw6xY",
      titulo: "Elemento 10",
      entidadID: 0
    }];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }

  redireccion(tipo: number) {
    switch(tipo) {
      case 1:
        this.router.navigate(['home/inicio']);
      break;
      case 2: case 3: case 4: case 5: case 6: case 7: case 8:
        this.router.navigate(['home/dinamic/nota']);
      break;
      default:
        this.router.navigate(['home/inicio']);
      break;
    }
  }
}
