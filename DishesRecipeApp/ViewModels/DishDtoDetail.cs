using DishRecipeApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;

namespace DishesRecipeApp.ViewModels
{
    public class DishDtoDetail
    {
        public long Id { get; set; }
        //[MaxLength(10, ErrorMessage = "Name must have at most 10 characters.")]
        public string Name { get; set; }
        public string Description { get; set; }
        public IEnumerable<IngredientDtoDetail> Ingredients { get; set; }
        public DishCategory DishCategory { get; set; }
        public IEnumerable<ReviewDtoDetail> Reviews { get; set; }
        public DateTime DateAdded { get; set; }
        


        public static DishDtoDetail GetDtoFromDish(Dish dish)
        {
            return new DishDtoDetail
            {
                Id = dish.Id,
                Name = dish.Name,
                Description = dish.Description,
                Ingredients = dish.Ingredients.Select (i => new IngredientDtoDetail()
                {
                    Id = i.Id,
                    Name = i.Name,
                    IngredientType = i.IngredientType,
                    Origin = i.Origin
                }),
                DishCategory = dish.DishCategory,
                Reviews = dish.Reviews.Select(r => new ReviewDtoDetail()
                {
                    Id = r.Id,
                    Content = r. Content,
                }),
                DateAdded = dish.DateAdded
            };
        }

    }
}



