import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LiveCard } from '../../models/liveCard.model';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public liveCard!: LiveCard;
  @Output() public clickOption = new EventEmitter<any>();
  @Input() public width: string = "320px";
  @Input() public height: string = "265px";

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  clickCardOption(event: Event) {
    event.preventDefault();
    let params = {
      "entidadID": this.liveCard.entidadID
    };
    this.clickOption.emit(params);
  }
}