const menu = document.querySelector("#menu");
const navItems = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links");

// Open and close the menu bar
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  navItems.classList.toggle("open");
});

// close the menu bar upon clicking the links
navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.toggle("fa-xmark");
    navItems.classList.toggle("open");
  });
});

// Populate the projects
const projContainer = document.querySelectorAll(".project-container");
const projThumbnail = document.querySelectorAll(".proj-thumbnail");

projContainer.forEach((proj, index) => {
  if (index % 2 != 0) {
    proj.classList.add("proj-alternate");
  }

  //projThumbnail[index].style.backgroundImage =
  //"url('/src/projects/capstone/about-us.jpg')";
  //projThumbnail[index].style.backgroundImage = projUrls[index];
});

// Animations

// get the  div's for animation on scroll
const profileDesc = document.querySelector(".hero-desc");
const profilePic = document.querySelector(".hero-profile");
const aboutDesc = document.querySelector(".about-content");
const projectsDesc = document.querySelectorAll(".proj-desc");
const skillContainer = document.querySelectorAll(".skill-container");

// get the constant height of window
let windowHeight = window.innerHeight / 1.2;

// get the element position  TOP
function getPostition(el) {
  const topPosition = el.getBoundingClientRect().top;
  return topPosition;
}

// Add Scroll Event
window.addEventListener("scroll", () => {
  animateScroll(aboutDesc, "x");
  animateScrollArray(projectsDesc, "axis-x");
  animateScrollArray(projThumbnail, "scale-up");
  animateScrollArray(skillContainer, "scale-up");
});

// Add Animation single class element
function animateScroll(el, axis) {
  // get the top position of the reference
  let topPosition = getPostition(el);
  //console.log("TP: " + topPosition);
  //console.log("WH: " + windowHeight);
  if (axis == "x") {
    if (windowHeight > topPosition && topPosition > -250) {
      el.classList.add("x-axis");
    } else {
      el.classList.remove("x-axis");
    }
  }
}

// add animation array class element
function animateScrollArray(arr, animation) {
  arr.forEach((element) => {
    let topPosition = getPostition(element);
    switch (animation) {
      // animate the elements horizontally
      case "axis-x":
        if (windowHeight > topPosition && topPosition > -350) {
          element.classList.add("x-axis");
        } else {
          element.classList.remove("x-axis");
        }
        break;
      // animate the elements base on size
      case "scale-up":
        if (windowHeight > topPosition && topPosition > -350) {
          element.classList.add("scale-up");
        } else {
          element.classList.remove("scale-up");
        }
        break;
    }
  });
}

// Swipper JS
const swiper = new Swiper(".swiper", {
  // add auto play
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // to add click function on pagination
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
