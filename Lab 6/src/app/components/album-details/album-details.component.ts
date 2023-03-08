import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  album: Album | null = {
    userId: 0,
    id: 0,
    title: '',
  };
  initTitle: string = '';
  canSave: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit() {
    let albumId = this.route.snapshot.params['id'];
    setTimeout(() => {
      if (albumId == null) {
        this.location.go('albums');
        return;
      }

      this.albumService.getAlbum(albumId).subscribe((album) => {
        console.log('get album', album);
        if (album === null) {
          this.album = null;
          return;
        }
        this.album = album;
        this.initTitle = album.title;
      });
    });
  }

  changeHandler(e: any) {
    if (!this.album) return;
    if (this.initTitle !== e.target.value) this.canSave = true;
    else this.canSave = false;

    this.album.title = e.target.value;
  }

  editTitle() {
    this.albumService.updateAlbum(this.album!.id, this.album).subscribe((x: any) => this.album = x.body);
  }
}
