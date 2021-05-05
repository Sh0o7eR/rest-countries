import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { DetailsComponent } from './shared/details/details.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { FilterComponent } from './shared/filter/filter.component';
import { CardComponent } from './shared/card/card.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    NavbarComponent,
    SearchbarComponent,
    FilterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
