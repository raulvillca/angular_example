import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Cloth } from '../models/cloth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  urls = [
    {
      'addTrouser': '/add_trouser',
      'addTShirt': '/add_tshirt',
      'addSweater': '/add_sweater',
      'getTrouserList': '/trouser_list',
      'getTrouserItem': '/trouser_item',
      'getTShirtList': '/tshirt_list',
      'getTShirtItem': '/tshirt_item',
      'getSweaterList': '/sweater_list',
      'getSweaterItem': '/sweater_item',
      'getDealList': '/deal_list',
      'addDeal': '/add_deal',
      'updateDeal': '/update_deal'
    }
  ];

  constructor(private http: HttpClient) { }

  addTrouser (cloth: Cloth): Observable<Cloth> {
    return this.http.post<Cloth>(this.urls['add_trouser'], cloth, httpOptions).pipe(
      catchError(this.handleError<Cloth>('addTrouser'))
    );
  }

  addTShirt (cloth: Cloth): Observable<Cloth> {
    return this.http.post<Cloth>(this.urls['add_tshirt'], cloth, httpOptions).pipe(
      catchError(this.handleError<Cloth>('addTShirt'))
    );
  }

  addSweater (cloth: Cloth): Observable<Cloth> {
    return this.http.post<Cloth>(this.urls['add_sweater'], cloth, httpOptions).pipe(
      catchError(this.handleError<Cloth>('addSweater'))
    );
  }

  addDeal (cloth: Cloth): Observable<Cloth> {
    return this.http.post<Cloth>(this.urls['add_deal'], cloth, httpOptions).pipe(
      catchError(this.handleError<Cloth>('addDeal'))
    );
  }

  updateDeal (cloth: Cloth): Observable<Cloth> {
    return this.http.post<Cloth>(this.urls['update_deal'], cloth, httpOptions).pipe(
      catchError(this.handleError<Cloth>('updateDeal'))
    );
  }

  getTrousers (): Observable<Cloth> {
    return this.http.get<Cloth>(this.urls['getTrouserList']);
  }

  getTrouserItem (): Observable<Cloth> {
    return this.http.get<Cloth>(this.urls['getTrouserItem']).pipe(
      catchError(this.handleError<Cloth>('getTrouserItem'))
    );
  }

  getTShirts (): Observable<Cloth> {
    return this.http.get<Cloth>(this.urls['getTShirtList']);
  }

  getTShirtItem (): Observable<Cloth> {
    return this.http.get<Cloth>(this.urls['getTShirtItem']).pipe(
      catchError(this.handleError<Cloth>('getTShirtItem'))
    );
  }

  getSweaters (): Observable<Cloth> {
    return this.http.get<Cloth>(this.urls['getSweaterList']);
  }

  getSweaterItem (): Observable<Cloth> {
    return this.http.get<Cloth>(this.urls['getSweaterItem']).pipe(
      catchError(this.handleError<Cloth>('getSweaterItem'))
    );
  }

  getDeals (): Observable<Cloth> {
    return this.http.get<Cloth>(this.urls['getDealList']).pipe(
      catchError(this.handleError<Cloth>('getDealList'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
  
      console.log(`${operation} failed: ${error.message}`);

      return of (result as T);
    };
  }
}
