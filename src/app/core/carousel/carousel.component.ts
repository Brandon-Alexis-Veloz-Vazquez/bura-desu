import { Component, Input, OnInit } from '@angular/core';
import { BannerJSON } from 'src/app/models/liveCard.model';

@Component({
  selector: 'ngv-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() public images: Array<BannerJSON> = [];

  constructor() { }

  ngOnInit(): void { }
}