import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { HomeRoutingModule } from './home-routing.module';
import { LiveCardModule } from '../core/live-card/live-card.module';

@NgModule({
  declarations: [
    HomeInicioComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    LiveCardModule
  ],
  exports: [
    
  ],
  providers: [
    
  ],
  entryComponents: [
    
  ]
})
export class HomeModule { }