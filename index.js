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

const openDrawer = () => {
  document.getElementsByClassName("navbar-nav")[0].classList.add("show");
  document.getElementById("menu-icon").style.display = "none";
  document.getElementById("times-icon").style.display = "block";
};

const closeDrawer = () => {
  document.getElementById("menu-icon").style.display = "block";
  document.getElementById("times-icon").style.display = "none";
  document.getElementsByClassName("navbar-nav")[0].classList.remove("show");
};

const toggleNavOptions = () => {
  const isMenuOpen = document
    .getElementsByClassName("navbar-nav")[0]
    .classList.contains("show");
  if (!isMenuOpen) {
    openDrawer();
  } else {
    closeDrawer();
  }
};

const navBarHandler = () => {
  const menuToggler = document.getElementById("toggler-button");
  document.getElementById("times-icon").style.display = "none";
  menuToggler.addEventListener("click", () => {
    toggleNavOptions();
  });

  // const navItem = document.getElementById("nav-item");
  // navItem.addEventListener("click", (e) => {
  //   document.getElementsByClassName("active")[0].classList.remove("active");
  //   e.target.parentNode.classList.add("active");
  //   toggleNavOptions();
  // });
};

const onScrollNavLinkHandler = () => {
  let section = document.querySelectorAll("section");
  let lists = document.querySelectorAll(".nav-item");

  const activeLink = (li) => {
    lists.forEach((item) => item.classList.remove("active"));
    li.classList.add("active");
  };

  // lists.forEach((item) =>
  //   item.addEventListener("click", function () {
  //     activeLink(this);
  //   })
  // );

  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      closeDrawer();
      activeLink(target);
    }
  });
};

const handlePageScroll = () => {
  document.addEventListener(
    "scroll",
    () => {
      const scrollIndicator = document.getElementById("scroll-indicator");
      scrollIndicator.style.display = "none";
      onScrollNavLinkHandler();
    },
    true
  );
};

const toggleWorkedBrandsInfo = (id) => {
  const brandsInfo = document.querySelectorAll(".brands-description");
  brandsInfo.forEach((a) => a.classList.add("hide-info"));
  document.getElementById(id).classList.remove("hide-info");
};

const manageWorkedBrandsInfo = () => {
  const brandsIconArea = document.querySelectorAll(".brand-img");
  brandsIconArea.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      toggleWorkedBrandsInfo(`${event.target.alt}-description`);
    });
  });
  toggleWorkedBrandsInfo("paytm-description");
};

const initializeApp = () => {
  navBarHandler();
  setWelcomeMessage();
  handlePageScroll();
  manageWorkedBrandsInfo();
};

initializeApp();
