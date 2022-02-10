

import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  id = "tsparticles";

  ngOnInit(): void {
    
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }

}