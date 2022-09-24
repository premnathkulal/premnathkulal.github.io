function initializeApp() {
  const welcomeText = [
    "Hello 👋",
    "नमस्ते 🙏",
    "ನಮಸ್ಕಾರ 🙏",
    "ഹലോ 🙏",
    "வணக்கம் 🙏",
    "こんにちは 🙇‍♂️",
    "你好",
  ];
  const welcomeTextDocument = document.getElementById("greet-message");
  let count = 0;

  setInterval(() => {
    welcomeTextDocument.classList.add("fade");
    setTimeout(() => {
      if (count >= welcomeText.length) {
        count = 0;
      }
      welcomeTextDocument.innerHTML = welcomeText[count];
      welcomeTextDocument.classList.remove("fade");
    }, 500);

    count += 1;
  }, 5000);
}

const menuToggler = document.getElementById("toggler-button");
menuToggler.addEventListener("click", () => {
  const isMenuOpen = document
    .getElementsByClassName("navbar-nav")[0]
    .classList.contains("show");
  if (!isMenuOpen) {
    document.getElementsByClassName("navbar-nav")[0].classList.add("show");
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("xbar-icon").style.display = "block";
  } else {
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("xbar-icon").style.display = "none";
    document.getElementsByClassName("navbar-nav")[0].classList.remove("show");
  }
});

initializeApp();
