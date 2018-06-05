import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Identifiers } from '@angular/compiler';
import { TipRacuna } from '../models/Tip-Racuna';


@Injectable()
export class TipRacunaService {

  private readonly API_URL = 'http://localhost:8083/tipRacuna/';

  dataChange: BehaviorSubject<TipRacuna[]> = new BehaviorSubject<TipRacuna[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllTipRacuna(): Observable<TipRacuna[]> {
      this.httpClient.get<TipRacuna[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
      },
          (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
          });
      return this.dataChange.asObservable();
  }

  public addTipRacuna(racun: TipRacuna): void {
      this.httpClient.post(this.API_URL, TipRacuna).subscribe();
  }

  public updateTipRacuna(racun: TipRacuna): void {
      this.httpClient.put(this.API_URL, TipRacuna).subscribe();
  }

  public deleteTipRacuna(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
