import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Identifiers } from '@angular/compiler';
import { Kredit } from '../models/Kredit';


@Injectable()
export class KreditService {

  private readonly API_URL = 'http://localhost:8083/kredit/';

  dataChange: BehaviorSubject<Kredit[]> = new BehaviorSubject<Kredit[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllKredit(): Observable<Kredit[]> {
      this.httpClient.get<Kredit[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
      },
          (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
          });
      return this.dataChange.asObservable();
  }

  public addKredit(kredit: Kredit): void {
      this.httpClient.post(this.API_URL, Kredit).subscribe();
  }

  public updateKredit(kredit: Kredit): void {
      this.httpClient.put(this.API_URL, Kredit).subscribe();
  }

  public deleteKredit(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
