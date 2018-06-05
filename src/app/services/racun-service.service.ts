import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Identifiers } from '@angular/compiler';
import { Racun } from '../models/Racun';


@Injectable()
export class RacunService {

  private readonly API_URL = 'http://localhost:8083/racun/';

  dataChange: BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllRacun(): Observable<Racun[]> {
      this.httpClient.get<Racun[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
      },
          (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
          });
      return this.dataChange.asObservable();
  }

  public addRacun(racun: Racun): void {
      this.httpClient.post(this.API_URL, Racun).subscribe();
  }

  public updateRacun(racun: Racun): void {
      this.httpClient.put(this.API_URL, Racun).subscribe();
  }

  public deleteRacun(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
