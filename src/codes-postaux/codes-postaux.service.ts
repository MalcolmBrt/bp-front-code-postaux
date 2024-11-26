import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CodePostal } from './code-postal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodesPostauxService {
  private apiUrl = 'http://localhost:8080/v1/code-postal';
  private http = inject(HttpClient);

  getCodesPostaux(commune: string): Observable<CodePostal[]> {
    return this.http.get<CodePostal[]>(`${this.apiUrl}?nomCommune=${commune}`);
  }
}
