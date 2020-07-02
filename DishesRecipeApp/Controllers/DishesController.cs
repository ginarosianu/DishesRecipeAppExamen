using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DishRecipeApp.Models;
using DishesRecipeApp.ViewModels;

namespace DishesRecipeApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishesController : ControllerBase
    {
        private readonly DishesDbContext _context;

        public DishesController(DishesDbContext context)
        {
            _context = context;
        }

        // GET: api/Dishes
        /// <summary>
        /// Gets a list of all Dish objects.
        /// </summary>
        /// <param name="from">Filter for dishes added from this date time (inclusive). Leave empty for now lower limit..</param>
        /// <param name="to">Filter for dishes added up to this date time (inclusive). Leave empty for now upper limit.</param>
        /// <returns>A list of Dish objects.</returns>
        [HttpGet]
        //public async Task<ActionResult<IEnumerable<Dish>>> GetDishes()
        //{
        //    return await _context.Dishes.ToListAsync();
        //}
       
        public async Task<ActionResult<IEnumerable<DishWithReviewsDto>>> GetDishes(
            [FromQuery] DateTime? from = null,
            [FromQuery] DateTime? to = null)
        {
            IQueryable<Dish> result = _context.Dishes;
            if (from != null)
            {
                result = result.Where(d => from <= d.DateAdded);
            }
            if (to != null)
            {
                result = result.Where(d => d.DateAdded <= to);
            }

            var resultList = await result
                .Include(d => d.Reviews)
                .Select(d => DishWithReviewsDto.FromDish(d))
                .ToListAsync();
            return resultList;
        }

        /// <summary>
        /// Gets a specific Dish object.
        /// </summary>
        /// <param name="id">The id of the dish you want to return.</param>
        /// <returns>The dish with the id you gave.</returns>
        ///<response code = "201">Returns the dish.</response>
        ///<response code = "404">Not found, if the param id does not exist.</response>
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        // GET: api/Dishes/5
        [HttpGet("{id}")]
        //public async Task<ActionResult<Dish>> GetDish(long id)
        //{
        //    var dish = await _context.Dishes.FindAsync(id);

        //    if (dish == null)
        //    {
        //        return NotFound();
        //    }

        //    return dish;
        //}


        public async Task<ActionResult<Dish>> GetDish(long id)
        {
            

            var dish = await _context.Dishes
                .Include(d => d.Reviews)
                .Include (d => d.Ingredients)
                .Select(d => new DishDtoDetail()
                {
                    Id = d.Id,
                    Name = d.Name,
                    Description = d.Description,
                    Ingredients = d.Ingredients.Select (i => new IngredientDtoDetail() 
                    { 
                        Id = i.Id,
                        Name = i.Name,
                        IngredientType = i.IngredientType,
                        Origin = i.Origin
                    }),
                    DishCategory = d.DishCategory,
                    Reviews = d.Reviews.Select(r => new ReviewDtoDetail()
                    {
                        Id = r.Id,
                        Content = r.Content
                    
                    })
                }).SingleOrDefaultAsync(d => d.Id == id);

              if (dish == null)
            {
                return NotFound();
            }

            return Ok(dish);
        }


        /// <summary>
        /// Update a Dish object with a specific id.
        /// </summary>
        /// <param name="id">The id of the object you want to update.</param>
        /// <param name="dish">Enter the new name of the dish you want to update.</param>
        /// <returns>The updated dish.</returns>
        // PUT: api/Dishes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDish(long id, Dish dish)
        {
            if (id != dish.Id)
            {
                return BadRequest();
            }

            _context.Entry(dish).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DishExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        /// <summary>
        /// Create a new Dish object.
        /// </summary>
        /// <param name="dish">The name of Dish object you want to create.</param>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /DishrecipeApp
        ///     {
        ///        "id": 1,
        ///         "name": "name1",
        ///         "description": "description1",
        ///         "dishcategory": "dishcategory1",
        ///        "dateAdded": "dateAdded1",
        ///         "numberOfReviews": 1
        ///     }
        /// </remarks>
        /// <returns>The created object</returns>
        /// <response code="201">Returns the newly created item</response>
        /// <response code="400">If the item is null</response>

        // POST: api/Dishes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Dish>> PostDish(Dish dish)
        {
            _context.Dishes.Add(dish);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDish", new { id = dish.Id }, dish);
        }


        /// <summary>
        /// Delets a specific object.
        /// </summary>
        /// <param name="id">The id of the Dish object you want to delete.</param>
        /// <returns>The deleted Object</returns>
        /// <response code = "201">When the object was deleted succesfully</response>
        /// <response code = "400">When the object was not deleted succesfully</response>
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        // DELETE: api/Dishes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Dish>> DeleteDish(long id)
        {
            var dish = await _context.Dishes.FindAsync(id);
            if (dish == null)
            {
                return NotFound();
            }

            _context.Dishes.Remove(dish);
            await _context.SaveChangesAsync();

            return dish;
        }

        private bool DishExists(long id)
        {
            return _context.Dishes.Any(e => e.Id == id);
        }
    }
}
