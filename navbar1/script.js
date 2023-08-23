const header = document.getElementById("header");
const navToggle = document.getElementById("nav-toggle");
const navDropdown = document.getElementById("nav-dropdown");

const navItems = `
  <li><a href="#home"><i class="uil uil-estate nav_icon"></i>Home</a></li>
  <li><a href="#about"><i class="uil uil-user nav_icon"></i>About</a></li>
  <li><a href="#skills"><i class="uil uil-file-alt nav_icon"></i>Skills</a></li>
  <li><a href="#portfolio"><i class="uil uil-scenery nav_icon"></i>Portfolio</a></li>
  <li><a href="#contact"><i class="uil uil-message nav_icon"></i>Contactme</a></li>
`;

navToggle.addEventListener("click", () => {
  const isOpen = navDropdown.style.display === "block";

  navDropdown.innerHTML = isOpen ? "" : navItems;
  navDropdown.style.display = isOpen ? "none" : "block";
  navToggle.innerHTML = isOpen ? '<i class="uil uil-apps"></i>' : '<i class="uil uil-times"></i>';
});
