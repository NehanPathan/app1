// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeListComponent } from './scheme-list/scheme-list.component';
import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';
import { RecentSchemesComponent } from './recent-schemes/recent-schemes.component';
import { PopularSchemesComponent } from './popular-schemes/popular-schemes.component';

const routes: Routes = [
  { path: '', component: SchemeListComponent },
  { path: 'details/:id', component: SchemeDetailsComponent },
  { path: 'recent-schemes', component: RecentSchemesComponent },
  { path: 'popular-schemes', component: PopularSchemesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
