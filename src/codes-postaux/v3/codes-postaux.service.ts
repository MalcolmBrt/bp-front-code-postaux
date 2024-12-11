import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CodePostal } from '../shared/code-postal';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CodesPostauxService {
  private http = inject(HttpClient);

  getCodesPostaux(params: any): Observable<CodePostal[]> {
    return this.http.get<CodePostal[]>(`${environment.baseApiURL}/v3/codes-postaux/search`, { params });
  }

}
