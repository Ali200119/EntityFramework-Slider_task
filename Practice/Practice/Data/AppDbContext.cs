using System;
using Microsoft.EntityFrameworkCore;
using Practice.Models;

namespace Practice.Data
{
	public class AppDbContext: DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

		public DbSet<Slider> Sliders { get; set; }
        public DbSet<SliderInfo> SliderInfo { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Slider>().HasData(
                new Slider { Id = 1, Image = "h3-slider-background.jpg" },
                new Slider { Id = 2, Image = "h3-slider-background-2.jpg" },
                new Slider { Id = 3, Image = "h3-slider-background-3.jpg" }
            );

            modelBuilder.Entity<SliderInfo>().HasData(
                new SliderInfo { Id = 1, Title = "<h1>Send <span>flowers</span> like</h1><h1>you mean it</h1>", Description = "Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris.", SignatureImage = "h2-sign-img.png" }
            );
        }
    }
}