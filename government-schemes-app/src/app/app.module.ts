  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HttpClientModule } from '@angular/common/http';

  import { AppComponent } from './app.component';
  import { SchemeListComponent } from './scheme-list/scheme-list.component';
  import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';
  import { AppRoutingModule } from './app-routing.module';
  import { FormsModule } from '@angular/forms';
import { RecentSchemesComponent } from './recent-schemes/recent-schemes.component';
import { PopularSchemesComponent } from './popular-schemes/popular-schemes.component';

  @NgModule({
    declarations: [
      AppComponent,
      SchemeListComponent,
      SchemeDetailsComponent,
      RecentSchemesComponent,
      PopularSchemesComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
