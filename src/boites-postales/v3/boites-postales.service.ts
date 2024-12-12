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
    // utilise temporairement l'API v2 puisque j'ai pas encoré fait l'endpoint v3
    return this.http.get<any>(`${environment.baseApiURL}/v2/boite-postale`, { params });
  }
}
