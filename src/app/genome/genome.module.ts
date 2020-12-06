import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenomeRoutingModule } from './genome-routing.module';
import { GenomeComponent } from './genome.component';


@NgModule({
  declarations: [GenomeComponent],
  imports: [
    CommonModule,
    GenomeRoutingModule
  ]
})
export class GenomeModule { }
