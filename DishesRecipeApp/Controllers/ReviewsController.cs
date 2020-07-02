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
    public class ReviewsController : ControllerBase
    {
        private readonly DishesDbContext _context;

        public ReviewsController(DishesDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets a list of all Review ojects.
        /// </summary>
        /// <returns>The list of reviews.</returns>
        // GET: api/Reviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviews()
        {
            return await _context.Reviews.ToListAsync();
        }

        /// <summary>
        /// Gets the Review object with a specific id.
        /// </summary>
        /// <param name="id">The id of Review object you want to get.</param>
        /// <returns>The Review object with the id you gave</returns>
        ///<response code = "201">Returns the Ingredient object</response>
        ///<response code = "404">Not found, if the param id does not exist.</response>
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        // GET: api/Reviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetReview(long id)
        {
            var review = await _context.Reviews.FindAsync(id);

            if (review == null)
            {
                return NotFound();
            }

            return review;
        }



        /// <summary>
        ///  Update a Review object with a specific Id.
        /// </summary>
        /// <param name="id">The Id of the Review object you want to update.</param>
        /// <param name="review">Enter the new name of the review you want to update.</param>
        /// <returns>The updated Review object</returns>
        // PUT: api/Reviews/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReview(long id, Review review)
        {
            if (id != review.Id)
            {
                return BadRequest();
            }

            _context.Entry(review).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewExists(id))
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
        /// Create a new Review object.
        /// </summary>
        /// <param name="review">The name of Review object you want to create.</param>
        /// <returns> The newly created Review object.</returns>
        // POST: api/Reviews
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReview", new { id = review.Id }, review);
        }



        /// <summary>
        /// Delets a specific Review object.
        /// </summary>
        /// <param name="id">The id of Review object you want to delete.</param>
        /// <returns> The deleted object.</returns>
        /// <response code = "201">When the object was deleted succesfully</response>
        /// <response code = "400">When the object was not deleted succesfully</response>
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        // DELETE: api/Reviews/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Review>> DeleteReview(long id)
        {
            var review = await _context.Reviews.FindAsync(id);
            if (review == null)
            {
                return NotFound();
            }

            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();

            return review;
        }

        private bool ReviewExists(long id)
        {
            return _context.Reviews.Any(e => e.Id == id);
        }
    }
}
