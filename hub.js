const mobileNav = document.querySelector(".moblie-navbar-btn");
const navHeader = document.querySelector(".nav")



mobileNav.addEventListener("click",()=>{
    navHeader.classList.toggle("active")
})
