import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./job-listing/job-listing.module').then(m => m.JobListingModule) },
    { path: 'compare', loadChildren: () => import('./compare/compare.module').then(m => m.CompareModule) },
    { path: 'job-listing', loadChildren: () => import('./job-listing/job-listing.module').then(m => m.JobListingModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
