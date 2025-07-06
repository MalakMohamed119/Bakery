document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");
    const homeSection = document.getElementById("home");
    const logo = document.getElementById("navbarLogo");
  
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
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
  });
  