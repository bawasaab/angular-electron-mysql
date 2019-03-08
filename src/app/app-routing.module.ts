import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'masters',
    loadChildren: './masters/masters.module#MastersModule'
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'masters'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
