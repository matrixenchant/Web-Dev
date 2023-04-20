import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  $loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  startLoading() {
    this.$loading.next(true);
  }
  endLoading() {
    this.$loading.next(false);
  }
  isLoading(): Observable<boolean> {
    let res = this.$loading.asObservable();
    return res;
  }

  getCompanies(): Observable<Company[]> {
    this.startLoading();
    let res = this.http.get<Company[]>(
      'http://localhost:8000/api/companies'
    );
    res.subscribe(() => {
      this.endLoading();
    });
    return res;
  }
}
