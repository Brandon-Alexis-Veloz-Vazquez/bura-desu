import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { PipeModule } from 'src/app/tools/pipe/pipe.module';
import { DirectiveModule } from 'src/app/tools/directive/directive.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    DirectiveModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
