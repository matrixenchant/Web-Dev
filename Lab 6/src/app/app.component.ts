import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lab 6';

  constructor(private albumsService: AlbumService) {}

  ngOnInit() {
    console.log('app');
  }

  isLoading() {
    return this.albumsService.isLoading();
  }
}
