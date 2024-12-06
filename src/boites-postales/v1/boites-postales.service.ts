import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoitesPostalesService {
  private apiUrl = 'http://localhost:8080/v1/boite-postale';
  private http = inject(HttpClient);

  getBoitesPostales(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl, { params });
  }
}
