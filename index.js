const menuToggler = document.getElementById("toggler-button");
menuToggler.addEventListener("click", () => {
  const isMenuOpen = document
    .getElementsByClassName("navbar-nav")[0]
    .classList.contains("show");
  !isMenuOpen
    ? document.getElementsByClassName("navbar-nav")[0].classList.add("show")
    : document.getElementsByClassName("navbar-nav")[0].classList.remove("show");
});
