
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.top-header');

hamburger.onclick = function () {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
}

// закрытие navbar при клике на позицию меню
document.querySelectorAll(".top-navbar-item").forEach(item => item.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navBar.classList.remove("active");
    }))