import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaComponent } from './nota/nota.component';
import { ReviewComponent } from './review/review.component';
import { VideoComponent } from './video/video.component';


const routes: Routes = [
  { path:"nota", component: NotaComponent },
  { path:"review", component: ReviewComponent },
  { path:"video", component: VideoComponent },
  { path: '', redirectTo: 'nota', pathMatch: 'full' },
  { path: '**' , redirectTo: 'nota', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinamicRoutingModule { }