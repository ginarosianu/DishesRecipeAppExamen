

    export class Dish
    {
      id: number;
      name: string;
      description: string;
      ingredientsNo: number;
      dishCategory: string;
      reviewsNo: number;
      dateAdded: string;
    }

export enum DishCategory
    {
        Appetizer = 0,
        Soup = 1,
        MainDish = 2,
        Desert = 3
     }
