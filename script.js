let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar-menu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

//klik diluar menu untuk menutup

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !navbar.contains(event.target)) {
    navbar.classList.remove("open");
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    menu.classList.remove("bx-x");
  }
});

//shadow navbar

window.addEventListener("scroll", (e) => {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset >= 30){
        navbar.classList.add("shadow-navbar");
    }else{
        navbar.classList.remove("shadow-navbar");
    }
})

 var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

//ANIMATION ON SCROll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } 
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe (el));



//AOS & GSAP

AOS.init();

gsap.from(".header-content-1", {
    opacity: 0,
    y: 10,
    delay: 1.5,
    duration: 0.5,
})

gsap.from(".header-content-par", {
    opacity: 0,
    y: -10,
    delay: 0.5,
    duration: 0.5,
})

