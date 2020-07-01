using DishRecipeApp.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DishesRecipeApp.ModelValidators
{
	public class DishValidator : AbstractValidator<Dish>
	{
		public DishValidator()
		{
			RuleFor(x => x.Id).NotNull();
			RuleFor(x => x.Name).MinimumLength(2);
			RuleFor(x => x.Description).MaximumLength(25);
			RuleFor(d => d.DateAdded).LessThan(DateTime.Now).WithMessage("DateAdded must be lower that curent date");
		}
	}
}
