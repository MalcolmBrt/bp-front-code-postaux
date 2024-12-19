import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CodePostal } from './code-postal';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MocksService } from '../../mocks/mocks.service';

@Injectable({
  providedIn: 'root',
})
export class CodesPostauxService {
  private http = inject(HttpClient);
  private mocksService = inject(MocksService);

  getCodesPostaux(params: any): Observable<CodePostal[]> {
    if (environment.demo) {
      return this.mocksService.getCodesPostaux(params);
    }
    return this.http.get<CodePostal[]>(`${environment.baseApiURL}/v3/codes-postaux/search`, { params });
  }

}
