import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CodePostal } from './code-postal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodesPostauxService {
  private http = inject(HttpClient);

  getCodesPostaux(apiUrl: string, params: any): Observable<CodePostal[]> {
    return this.http.get<CodePostal[]>(apiUrl, { params });
  }

  getCommunes(apiUrl: string): Observable<string[]> {
    return this.http.get<string[]>(apiUrl);
  }
}
