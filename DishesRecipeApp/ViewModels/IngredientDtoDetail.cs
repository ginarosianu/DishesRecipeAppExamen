using DishRecipeApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DishesRecipeApp.ViewModels
{
    public class IngredientDtoDetail
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public IngredientType IngredientType { get; set; }
        public Origin Origin { get; set; }
    }
}
