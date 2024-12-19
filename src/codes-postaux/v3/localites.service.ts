import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MocksService } from '../../mocks/mocks.service';

@Injectable({
  providedIn: 'root',
})
export class LocalitesService {
  private http = inject(HttpClient);
  private mocksService = inject(MocksService);

  getLocalites(): Observable<string[]> {
    if (environment.demo) {
      return this.mocksService.getLocalites();
    }
    return this.http.get<string[]>(`${environment.baseApiURL}/v3/codes-postaux/localites`);
  }
}
