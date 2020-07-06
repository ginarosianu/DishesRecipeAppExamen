import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  id: string;

  constructor
    (private httpClient: HttpClient,
      @Inject('BASE_URL') private baseUrl: string,
  ) { }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.httpClient.get<Array<Ingredient>>(this.baseUrl + 'api/Ingredients');
  }

  getIngredient(id: number): Observable<Ingredient> {
    return this.httpClient.get<Ingredient>(this.baseUrl + 'api/Ingredients/' + id);
  }

  add(ingredient: Ingredient): Observable<Ingredient> {
    return this.httpClient.post<Ingredient>(this.baseUrl + 'api/Ingredients', ingredient);
  }

  delete(id: number): Observable<Ingredient> {
    return this.httpClient.delete<Ingredient>(this.baseUrl + 'api/Ingredients/' + id);
  }

  update(id: number, ingredient : Ingredient): Observable<Ingredient> {
    return this.httpClient.put<Ingredient>(this.baseUrl + 'api/Ingredients/' + id, ingredient);
  }
}
