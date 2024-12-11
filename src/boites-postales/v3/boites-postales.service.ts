import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoitesPostalesService {
  private http = inject(HttpClient);

  getBoitesPostales(params: any): Observable<any> {
    return this.http.get<any>(`${environment.baseApiURL}/v3/boite-postale`, { params });
  }
}
