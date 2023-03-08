import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumService) {}

  ngOnInit() {
    console.log('albums');
    setTimeout(() => {
      this.albumsService.getAlbums().subscribe((albums) => {
        this.albums = albums;
      });
    });
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(res => {
      console.log(res);
      this.albums = this.albums.filter(x => x.id !== id);
    })
  }
}
