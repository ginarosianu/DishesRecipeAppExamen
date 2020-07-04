using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DishRecipeApp.Models
{
    public enum DishCategory 
    {
        Appetizer = 0,
        Soup = 1,
        MainDish = 2,
        Desert =3 
    }

    public class Dish
    {
        public long Id { get; set; }
        //[MaxLength(10, ErrorMessage = "Name must have at most 10 characters.")]
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public DishCategory DishCategory { get; set; }
        public List<Review> Reviews { get; set; }
        public DateTime DateAdded { get; set; }
 
    }
}
