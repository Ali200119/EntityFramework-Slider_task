using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Practice.Data;
using Practice.Models;
using Practice.ViewModels;

namespace Practice.Controllers;

public class HomeController : Controller
{
    private readonly AppDbContext _context;
    public HomeController(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        List<Slider> sliders = _context.Sliders.ToList();
        SliderInfo sliderInfo = _context.SliderInfo.FirstOrDefault();

        HomeVM homeVM = new HomeVM
        {
            Sliders = sliders,
            SliderInfo = sliderInfo
        };

        return View(homeVM);
    }
}