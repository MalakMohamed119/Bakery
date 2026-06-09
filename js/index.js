document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");
    const homeSection = document.getElementById("home");
    const logo = document.getElementById("navbarLogo");
    const navLinks = Array.from(document.querySelectorAll("#mainNavbar .nav-link"));
    const sections = navLinks
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);
  
    function handleScroll() {
      const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
      const scrollPosition = window.scrollY + 80;
  
      if (scrollPosition >= homeBottom) {
        navbar.classList.add("navbar-scrolled");
        logo.src = "photos/bakery-color.png";  
      } else {
        navbar.classList.remove("navbar-scrolled");
        logo.src = "photos/bakery-light-1.png"; 
      }

      const currentSection = sections.reduce(function (activeSection, section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          return section;
        }

        return activeSection;
      }, sections[0]);

      navLinks.forEach(function (link) {
        const isActive = link.getAttribute("href") === "#" + currentSection.id;
        link.classList.toggle("active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); 
  });
  
