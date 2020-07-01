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

            //.Select(e => ExpenseDtoDetail.GetDtoFromExpense(e))
            //.AsEnumerable()
            //.FirstOrDefault(e => e.Id == id);

            if (dish == null)
            {
                return NotFound();
            }

            return Ok(dish);
        }




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

        // POST: api/Dishes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Dish>> PostDish(Dish dish)
        {
            _context.Dishes.Add(dish);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDish", new { id = dish.Id }, dish);
        }

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
