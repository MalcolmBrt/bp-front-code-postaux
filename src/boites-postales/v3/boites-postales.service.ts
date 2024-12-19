import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MocksService } from '../../mocks/mocks.service';

@Injectable({
  providedIn: 'root',
})
export class BoitesPostalesService {
  private http = inject(HttpClient);
  private mocksService = inject(MocksService);

  getBoitesPostales(params: any): Observable<any> {
    if (environment.demo) {
      return this.mocksService.getBoitesPostales(params);
    }
    return this.http.get<any>(`${environment.baseApiURL}/v3/boites-postales/search`, { params });
  }
}
