import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from './dish.models';
import { ActivatedRoute } from "@angular/router";
//import { PaginatedExpenses } from './paginatedExpenses.model';

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


//@Injectable()
//export class DishService {

//  constructor(
//    private http: HttpClient,
//    private applicationService: ApplicationService) { }


//  getDish(id: number) {
//    return this.http.get<Dish>(`${this.applicationService.baseUrl}api/Dishes/${id}`);
//  }

//  listDishes() {
//    return this.http.get<Dish[]>(`${this.applicationService.baseUrl}api/Dishes`);
//  }

//  saveDish(dish: Dish) {
//    return this.http.post(`${this.applicationService.baseUrl}api/Dishes`, dish);
//  }

//  modifyDish(dish: Dish) {
//    return this.http.put(`${this.applicationService.baseUrl}api/Dishes/${dish.id}`, dish);
//  }

//  deleteDish(id: number) {
//    return this.http.delete<any>(`${this.applicationService.baseUrl}api/Dishes/${id}`);
//  }
//}
