using DishRecipeApp.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DishesRecipeApp.ModelValidators
{
	public class ReviewValidator : AbstractValidator<Review>
	{
		public ReviewValidator()
		{
			RuleFor(x => x.Id).NotNull();
			RuleFor(x => x.Content).MaximumLength(25).WithMessage("Content must have 25 characters"); ;

		}
	}
}
