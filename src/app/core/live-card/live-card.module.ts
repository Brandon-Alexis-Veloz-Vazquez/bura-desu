import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveCardComponent } from './live-card.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    LiveCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LiveCardComponent
  ]
})
export class LiveCardModule { }