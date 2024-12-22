import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodePostal } from '../codes-postaux/v3/code-postal';
import localitesJson from '../mocks/localites.json'
import codesPostauxJson from '../mocks/codes-postaux.json'
import boitesPostalesJson from '../mocks/boites-postales.json'

@Injectable({
  providedIn: 'root'
})
export class MocksService {
  getLocalites(): Observable<string[]> {
    return new Observable((subscriber) => {
      subscriber.next(localitesJson);
    })
  }

  getCodesPostaux(params: any): Observable<CodePostal[]> {
    return new Observable((subscriber) => {
      subscriber.next(codesPostauxJson.filter((cp) => cp.localite === params.query || cp.commune === params.query));
    })
  }

  getBoitesPostales(params: any): Observable<any> {
    return new Observable((subscriber) => {
      subscriber.next(boitesPostalesJson);
    });
  }
}
