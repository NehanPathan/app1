// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeListComponent } from './scheme-list/scheme-list.component';
import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';

const routes: Routes = [
  { path: '', component: SchemeListComponent },
  { path: 'details/:id', component: SchemeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
