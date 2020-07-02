using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DishRecipeApp.Models;

namespace DishesRecipeApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientsController : ControllerBase
    {
        private readonly DishesDbContext _context;

        public IngredientsController(DishesDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets a list of Ingredient objects. 
        /// </summary>
        /// <returns>A list of Ingredient ojects</returns>
        // GET: api/Ingredients
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Ingredient>>> GetIngredients()
        {
            return await _context
                .Ingredients
                .OrderBy(i => i.Name)
                .ToListAsync();
        }


        //public async Task<ActionResult<IEnumerable<Ingredient>>> GetIngredients()
        //{
        //    return await _context.Ingredients.ToListAsync();
        //}

        /// <summary>
        /// Gets the Ingredient object with a specific id.
        /// </summary>
        /// <param name="id">The id of Ingredient object you want to get</param>
        /// <returns>The Ingredient object with the id you gave</returns>
        ///<response code = "201">Returns the Ingredient object</response>
        ///<response code = "404">Not found, if the param id does not exist.</response>
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        // GET: api/Dishes/5
        // GET: api/Ingredients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ingredient>> GetIngredient(long id)
        {
            var ingredient = await _context.Ingredients.FindAsync(id);

            if (ingredient == null)
            {
                return NotFound();
            }

            return ingredient;
        }

        /// <summary>
        ///  Update an Ingredient object with a specific Id.
        /// </summary>
        /// <param name="id">The Id of the Ingredient object you want to update.</param>
        /// <param name="ingredient">Enter the new name of the ingredient you want to update.</param>
        /// <returns>The updated Ingredient object</returns>

        // PUT: api/Ingredients/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIngredient(long id, Ingredient ingredient)
        {
            if (id != ingredient.Id)
            {
                return BadRequest();
            }

            _context.Entry(ingredient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IngredientExists(id))
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
        /// Create a new Ingredient object.
        /// </summary>
        /// <param name="ingredient">The name of Ingredient object you want to create.</param>
        /// <returns> The newly created Ingredient object.</returns>
        // POST: api/Ingredients
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Ingredient>> PostIngredient(Ingredient ingredient)
        {
            _context.Ingredients.Add(ingredient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIngredient", new { id = ingredient.Id }, ingredient);
        }


        /// <summary>
        /// Delets a specific Ingredient object.
        /// </summary>
        /// <param name="id">The id of object you want to delete.</param>
        /// <returns> The deleted object.</returns>
        /// <response code = "201">When the object was deleted succesfully</response>
        /// <response code = "400">When the object was not deleted succesfully</response>
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        // DELETE: api/Ingredients/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Ingredient>> DeleteIngredient(long id)
        {
            var ingredient = await _context.Ingredients.FindAsync(id);
            if (ingredient == null)
            {
                return NotFound();
            }

            _context.Ingredients.Remove(ingredient);
            await _context.SaveChangesAsync();

            return ingredient;
        }

        private bool IngredientExists(long id)
        {
            return _context.Ingredients.Any(e => e.Id == id);
        }
    }
}
