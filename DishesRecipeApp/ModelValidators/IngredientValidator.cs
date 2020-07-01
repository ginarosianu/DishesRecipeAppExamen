using DishRecipeApp.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DishesRecipeApp.ModelValidators
{
    public class IngredientValidator : AbstractValidator<Ingredient>
    {
		public IngredientValidator()
		{
			RuleFor(x => x.Id).NotNull();
			RuleFor(x => x.Name).MinimumLength(2);

		}
	}
}
