const images = [
  "poster-0",
  "poster-1",
  "poster-2",
  "poster-3",
  "poster-4",
  "poster-5",
  "poster-6",
  "poster-7",
  "poster-8",
  "poster-9",
  "poster-10"
];


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
  if(welcomeTextDocument === null) return;

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
      if(scrollIndicator === null) return;
      scrollIndicator.style.display = "none";
      onScrollNavLinkHandler();
    },
    true
  );
};

const toggleWorkedBrandsInfo = (id) => {
  const brandsInfo = document.querySelectorAll(".brands-description");
  if(!brandsInfo.length) return;
  brandsInfo?.forEach((a) => a.classList.add("hide-info"));
  document.getElementById(id).classList.remove("hide-info");
};

const manageWorkedBrandsInfo = () => {
  const brandsIconArea = document.querySelectorAll(".brand-img");
  if(!brandsIconArea.length) return;
  brandsIconArea?.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      toggleWorkedBrandsInfo(`${event.target.alt}-description`);
    });
  });
  toggleWorkedBrandsInfo("paytm-description");
};

const displayImagesInLoop = () => {
  const imageContainer = document.getElementById("image-container");
  if(imageContainer === null) return;
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = `assets/poster-craft/${image}.png`;
    img.alt = `image-${index}`;
    img.classList.add("poster-craft-image");
    imageContainer.appendChild(img);
  });
};

const initializeApp = () => {
  navBarHandler();
  setWelcomeMessage();
  handlePageScroll();
  manageWorkedBrandsInfo();
  displayImagesInLoop();
};

initializeApp();



