const Navbar = document.querySelector(".nav-item");
const slider = document.querySelector(".homeSect2");
const menubar = document.querySelector(".menubar");
const close = document.querySelector(".close");
const navLinks = document.querySelectorAll(".btn");
// const logo = document.querySelector(".logo");
const SlideCLick = document.querySelectorAll(".click");
const windowPathName = window.location.pathname;

const logoH1 = document.querySelector('.logo h1');
const logoH6 = document.querySelector('.logo h6');
const header = document.querySelector('nav'); // Assuming the header has the class "logo"

function setupScrollTrigger() {
  // Remove all existing ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  if (window.innerWidth > 1024) {
    // Set up ScrollTrigger animations for large screens
    ScrollTrigger.create({
      animation: gsap.to(logoH1, {
        fontSize: '2vw', // smaller font size
      }),
      scrub: true,
      trigger: "#home",
      start: "top top",
      end: "bottom top",
    });

    ScrollTrigger.create({
      animation: gsap.to(logoH6, {
        fontSize: '0.6vw', // smaller font size
      }),
      scrub: true,
      trigger: "#home",
      start: "top top",
      end: "bottom top",
    });

    // Adjust the header height
    ScrollTrigger.create({
      animation: gsap.to(header, {
        height: '10vh', // smaller height
      }),
      scrub: true,
      trigger: "#home",
      start: "top top",
      end: "bottom top",
    });
  } else {
    // Reset logo styles for small screens
    gsap.set(logoH1, { clearProps: "fontSize" });
    gsap.set(logoH6, { clearProps: "fontSize" });
    gsap.set(header, { clearProps: "height" });
  }
}

// Initial call to set up the correct state
setupScrollTrigger();

// Add event listener to handle screen resize
window.addEventListener("resize", () => {
  // Debounce to avoid excessive calls during resize
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(setupScrollTrigger, 250);
});




// Slide click event listener logic
SlideCLick.forEach((navClick) => {
  const navLinkPathName = new URL(navClick.href).pathname;
  if (
    windowPathName === navLinkPathName ||
    (windowPathName === "/home.html" && navLinkPathName === "/")
  ) {
    navClick.classList.add("active");
  }
});


menubar.addEventListener("click", () => {
  slider.style.display = "block";
  slider.style.width = "100%";
  slider.style.transform = "translateX(-50%)";
});
close.addEventListener("click", () => {
  slider.style.transform = "translateX(100%)";
});
