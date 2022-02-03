import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { PipeModule } from 'src/app/tools/pipe/pipe.module';
import { DirectiveModule } from 'src/app/tools/directive/directive.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    DirectiveModule,
    MaterialModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
