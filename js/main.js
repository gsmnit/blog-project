// Select DOM Items
const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// set initial state of Menu
let showMenu = false;
menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menubtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        // reset manu state
        showMenu = true;
    } else {
        menubtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        // reset manu state
        showMenu = false;

    }
}
