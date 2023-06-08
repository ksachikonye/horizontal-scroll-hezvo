gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Comment me out to see issue
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  normalizeScroll: true,
  ignoreMobileResize: true,
  effects: true,
  preventDefault: true
});

//Horizontal Scroll Galleries
if (document.getElementById("portfolio")) {
  const horizontalSections = gsap.utils.toArray(".horiz-gallery-wrapper");

  horizontalSections.forEach(function (sec, i) {
    const pinWrap = sec.querySelector(".horiz-gallery-strip");

    let pinWrapWidth;
    let horizontalScrollLength;

    function refresh() {
      pinWrapWidth = pinWrap.scrollWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
    }

    // window.addEventListener("load", function () {
    refresh();
    // Pinning and horizontal scrolling
    gsap.to(pinWrap, {
      scrollTrigger: {
        scrub: true,
        trigger: sec,
        pin: sec,
        start: "center center",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true
      },
      x: () => -horizontalScrollLength,
      ease: "none"
    });

    ScrollTrigger.addEventListener("refreshInit", refresh);
    // });
  });
}

// menu
//Javascript for Navigation effect on scroll
// window.addEventListener("scroll", function(){
//   var header = document.querySelector("header");
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

//Javascript for responsive navigation sidebar Nav
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
