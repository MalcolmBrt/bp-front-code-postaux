import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoitesPostalesService {
  private http = inject(HttpClient);

  getBoitesPostales(apiUrl: string, params: any): Observable<any> {
    return this.http.get<any>(apiUrl, { params });
  }
}
