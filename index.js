const setWelcomeMessage = () => {
  let count = 0;
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
};

const navBarHandler = () => {
  const menuToggler = document.getElementById("toggler-button");
  document.getElementById("times-icon").style.display = "none";
  menuToggler.addEventListener("click", () => {
    const isMenuOpen = document
      .getElementsByClassName("navbar-nav")[0]
      .classList.contains("show");
    if (!isMenuOpen) {
      document.getElementsByClassName("navbar-nav")[0].classList.add("show");
      document.getElementById("menu-icon").style.display = "none";
      document.getElementById("times-icon").style.display = "block";
    } else {
      document.getElementById("menu-icon").style.display = "block";
      document.getElementById("times-icon").style.display = "none";
      document.getElementsByClassName("navbar-nav")[0].classList.remove("show");
    }
  });
};

const handlePageScroll = () => {
  document.addEventListener("scroll", (e) => {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const totalPageHeight = document.body.scrollHeight;
    const scrollPoint = window.scrollY + window.innerHeight;
    if (Math.ceil(scrollPoint) >= totalPageHeight) {
      // At the bottom of page
    }
    if (window.scrollY > 100) {
      scrollIndicator.style.display = "none";
    }
    if (window.scrollY === 0) {
      scrollIndicator.style.display = "block";
    }
  });
};

const initializeApp = () => {
  navBarHandler();
  setWelcomeMessage();
  handlePageScroll();
};

initializeApp();
