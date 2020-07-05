using DishRecipeApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DishesRecipeApp.ViewModels
{
    public class DishWithNumberOfReviews
    {
        public long Id { get; set; }
        //[MaxLength(10, ErrorMessage = "Name must have at most 10 characters.")]
        public string Name { get; set; }
        public string Description { get; set; }
        public DishCategory DishCategory { get; set; }
        public DateTime DateAdded { get; set; }
        public long NumberOfReviews { get; set; }
        public long NumberOfIngredients { get; set; }


        //public static DishWithNumberOfReviews FromDish(Dish dish)
        //{
        //    return new DishWithNumberOfReviews
        //    {
        //        Id = dish.Id,
        //        Name = dish.Name,
        //        Description = dish.Description,
        //        DishCategory = dish.DishCategory,
        //        DateAdded = dish.DateAdded,
        //        NumberOfReviews = dish.Reviews.Count
        //    };
        //}

    }
}
