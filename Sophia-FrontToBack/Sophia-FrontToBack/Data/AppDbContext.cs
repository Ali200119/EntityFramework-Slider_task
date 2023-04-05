using System;
using Microsoft.EntityFrameworkCore;
using Sophia_FrontToBack.Models;

namespace Sophia_FrontToBack.Data
{
	public class AppDbContext: DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

		public DbSet<Slider> Sliders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Slider>().HasData(
                new Slider { Id = 1, Title = "HUGE SALE", Description = "Up to 70%", Image = "Slide1.jpg" },
                new Slider { Id = 2, Title = "BIGGEST DISCOUNT", Description = "Check the promotion", Image = "Slide2.jpg" },
                new Slider { Id = 3, Title = "BIGGEST SALE", Description = "Dont miss it", Image = "Slide3.jpg" },
                new Slider { Id = 4, Title = "OUR BEST PRODUCTS", Description = "Special selection", Image = "Slide4.jpg" },
                new Slider { Id = 5, Title = "MASSIVE SALE", Description = "Only for today", Image = "Slide5.jpg" }
            );
        }
    }
}