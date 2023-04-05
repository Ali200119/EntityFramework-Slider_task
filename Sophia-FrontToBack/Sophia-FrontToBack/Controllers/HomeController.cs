using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Sophia_FrontToBack.Data;
using Sophia_FrontToBack.Models;

namespace Sophia_FrontToBack.Controllers;

public class HomeController : Controller
{
    private readonly AppDbContext _context;
    public HomeController(AppDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        List<Slider> slides = _context.Sliders.ToList();

        return View(slides);
    }
}