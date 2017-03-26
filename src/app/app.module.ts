import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ 
  				  AppComponent, 
  				  NavbarComponent, 
  				  SearchComponent, 
  				  AboutComponent,
  				  ArtistComponent,
  				  AlbumComponent
  				],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }