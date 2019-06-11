import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from './food';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = '/api/v1/foods/';

  constructor(private http: HttpClient) { }

  getFoodsList(): Observable<Food[]> {
    return this.http.get<Food[]>(this.baseUrl);
  }

  getFood(id: string): Observable<Food> {
    const url = this.baseUrl + id;
    return this.http.get<Food>(url);
  }

  saveFood(food: Food): Observable<any> {
    return this.http.post<Food>(this.baseUrl, food, { observe: 'response' });
  }

  updateFood(id: string, food: Food): Observable<any> {
    const url = this.baseUrl + id;
    console.log('Hi');
    return this.http.put<any>(url, food, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(pro => console.log(JSON.stringify(pro))),
      catchError(err => this.handleError(err))
    );
  }

  deleteFood(id: string): Observable<any> {
    const url = this.baseUrl + id;
    return this.http.delete(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  private handleError(err: any) {
    const errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
