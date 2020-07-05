import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  id: string;

  constructor
    (private httpClient: HttpClient,
      @Inject('BASE_URL') private baseUrl: string,
  ) { }

  getAllDishes(): Observable<Dish[]> {
    return this.httpClient.get<Array<Dish>>(this.baseUrl + 'api/Dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(this.baseUrl + 'api/Dishes/' + id);
  }

  add(dish: Dish): Observable<Dish> {
    return this.httpClient.post<Dish>(this.baseUrl + 'api/Dishes', dish);
  }

  delete(id: number): Observable<Dish> {
    return this.httpClient.delete<Dish>(this.baseUrl + 'api/Dishes/' + id);
  }

  update(id: number, dish: Dish): Observable<Dish> {
    return this.httpClient.put<Dish>(this.baseUrl + 'api/Dishes/' + id, dish);
  }
}
