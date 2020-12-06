import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenomeComponent } from './genome.component';

const routes: Routes = [{ path: '', component: GenomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenomeRoutingModule { }
