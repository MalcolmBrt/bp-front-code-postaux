import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CodePostal } from './code-postal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodesPostauxService {
  private apiUrl = 'http://localhost:8080/v1/code-postal';
  private http = inject(HttpClient);

  getCodesPostaux(params: any): Observable<CodePostal[]> {
    return this.http.get<CodePostal[]>(this.apiUrl, { params });
  }
}
