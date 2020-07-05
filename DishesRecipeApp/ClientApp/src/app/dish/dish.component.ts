import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html'
})
export class DishComponent {
  public dishes: Dish[];

  public name: string = "test";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadDishes();
  }


  loadDishes() {
    this.http.get<Dish[]>(this.baseUrl + 'api/Dishes').subscribe(result => {
      this.dishes = result;
      console.log(this.dishes);
    }, error => console.error(error));
  }

  delete(dishId: string) {
    if (confirm('Are you sure you want to delete the dish with id ' + dishId + '?')) {
      this.http.delete(this.baseUrl + 'api/Dishes/' + dishId)
        .subscribe
        (
          result => {
            alert('Dish successfully deleted!');
            this.loadDishes();
          },
          error => alert('Cannot delete dish - maybe it has comments?')
        )
    }
  }

  submit() {

    var dish: Dish = <Dish>{};
    dish.name = this.name;
    dish.description = this.name;
    dish.dishCategory = DishCategory.Soup;
    dish.dateAdded = new Date();

    this.http.post(this.baseUrl + 'api/Dishes', dish).subscribe(result => {
      console.log('success!');
      this.loadDishes();
    },
      error => {
        if (error.status == 400) {
          console.log(error.error.errors)
        }
      });
  }
}


interface Dish {
  id: number;
  name: string;
  description: string;
  dishCategory: DishCategory;
  dateAdded: Date;
}

enum DishCategory {
  Appetizer = 0,
  Soup = 1,
  MainDish = 2,
  Desert = 3
}
