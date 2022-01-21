import { Component, OnInit } from '@angular/core';
import { LiveCard } from 'src/app/models/liveCard.model';

@Component({
  selector: 'home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.scss']
})
export class HomeInicioComponent implements OnInit {
  public liveCard: LiveCard;

  constructor() { }

  ngOnInit(): void {
    this.liveCard = {
      logo: "",
      fondo: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
      titulo: "Bura-desu",
      entidadID: 0
    };
  }

}
