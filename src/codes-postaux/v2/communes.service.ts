import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CommunesService {
  private http = inject(HttpClient);

  getCommunes(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.baseApiURL}/v2/codes-postaux/communes`);
  }
}
