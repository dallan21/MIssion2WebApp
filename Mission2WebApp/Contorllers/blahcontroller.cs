using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission2WebApp.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission2WebApp.Contorllers
{
    public class blahcontroller : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Grade_Calc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Grade_Calc(Grade_CalcModel model)
        {
            return View();
        }
    }
}
