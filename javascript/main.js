let bar = document.querySelector("#bars");
let nav_link = document.querySelector(".nav-link");

bar.addEventListener("click", function () {
    // alert("helo");
    nav_link.classList.toggle("show");
})