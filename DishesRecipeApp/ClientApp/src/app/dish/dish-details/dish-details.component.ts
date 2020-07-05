import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  private dish: DishWithDetails;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private route: ActivatedRoute) {
  }

  loadDish(dishId: string) {
    this.http.get<DishWithDetails>(this.baseUrl + 'api/Dishes/' + dishId).subscribe(result => {
      this.dish = result;
      console.log(this.dish);
    }, error => console.error(error));
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadDish(params.get('dishId'));
    });
  }
}
interface Review {
  content: string,
}

interface Ingredient {
  name: string,
  ingredientTye: string,
  origin : string
}

interface DishWithDetails {
  name: string,
  description: string,
  ingredients: Ingredient[],
  dishCategory : string,
  dateAdded: Date,
  reviews: Review []
}
