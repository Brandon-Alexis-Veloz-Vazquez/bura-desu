import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';

const routes: Routes = [
  { path:"inicio", component: HomeInicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**' , redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }