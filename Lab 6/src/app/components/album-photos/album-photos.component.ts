import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss'],
})
export class AlbumPhotosComponent implements OnInit {
  photos: AlbumPhotos[] = [];
  albumId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    public albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit() {
    let albumId = this.route.snapshot.params['id'];
    this.albumId = albumId;
    if (albumId == null) {
      this.location.go('albums');
      return;
    }

    setTimeout(() => {
      this.albumService.getAlbumPhotos(albumId).subscribe((photos) => {
        console.log('photos', photos);
        if (photos === null || !photos.length) {
          this.location.back();
          return;
        }

        this.photos = photos;
      });
    });
  }
}
