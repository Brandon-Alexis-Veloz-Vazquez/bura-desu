import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { LiveCardModule } from '../core/live-card/live-card.module';
import { CardModule } from '../core/card/card.module';
import { CarouselModule } from '../core/carousel/carousel.module';
import { FooterModule } from '../core/footer/footer.module';
import { DinamicRoutingModule } from './dinamic-routing.module';
import { NotaComponent } from './nota/nota.component';
import { ReviewComponent } from './review/review.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    NotaComponent,
    ReviewComponent,
    VideoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    DinamicRoutingModule,
    LiveCardModule,
    CarouselModule,
    CardModule,
    FooterModule
  ],
  exports: [
    
  ],
  providers: [
    
  ],
  entryComponents: [
    
  ]
})
export class DinamicModule { }