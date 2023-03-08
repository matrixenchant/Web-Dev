import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxCursorModule } from 'ngx-cursor';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgxCursorModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
