import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  $loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  startLoading() {
    console.log('start loading', this.$loading);
    this.$loading.next(true);
  }
  endLoading() {
    console.log('end loading', this.$loading);
    this.$loading.next(false);
  }
  isLoading(): Observable<boolean> {
    let res = this.$loading.asObservable();
    return res;
  }

  getAlbums(): Observable<Album[]> {
    this.startLoading();
    let res = this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
    res.subscribe(() => {
      this.endLoading();
    });
    return res;
  }

  getAlbum(id: number): Observable<Album | null> {
    this.startLoading();
    let res = this.http
      .get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .pipe(
        catchError((err) => {
          console.log('error', err);
          this.endLoading();
          return new BehaviorSubject<Album | null>(null);
        })
      );
    res.subscribe((x) => {
      this.endLoading();
    });
    return res;
  }

  getAlbumPhotos(id: number): Observable<AlbumPhotos[] | null> {
    this.startLoading();
    let res = this.http
      .get<AlbumPhotos[] | null>(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
      )
      .pipe(
        catchError((err) => {
          console.log('error', err);
          this.endLoading();
          return new BehaviorSubject(null);
        })
      );
    res.subscribe((x) => {
      this.endLoading();
    });
    return res;
  }

  updateAlbum(id: number, params: Album | null): Observable<Album> {
    this.startLoading();
    let res = this.http
      .put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        body: {
          ...params,
        },
      })
      .pipe(
        catchError((err) => {
          console.log('error', err);
          this.endLoading();
          return [];
        })
      );
    res.subscribe((x) => {
      console.log('update', x);
      
      this.endLoading();
    });
    return res;
  }

  deleteAlbum(id: number): Observable<Album> {
    this.startLoading();
    let res = this.http
      .delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .pipe(
        catchError((err) => {
          console.log('error', err);
          this.endLoading();
          return [];
        })
      );
    res.subscribe((x) => {
      console.log('update', x);
      
      this.endLoading();
    });
    return res;
  }
}
