import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { DetailsComponent } from './shared/details/details.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FilterComponent } from './shared/filter/filter.component';
import { CardComponent } from './shared/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ShareBarComponent } from './shared/share-bar/share-bar.component';
import { UnsplashComponent } from './shared/details/unsplash/unsplash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    NavbarComponent,
    FilterComponent,
    CardComponent,
    ShareBarComponent,
    UnsplashComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
