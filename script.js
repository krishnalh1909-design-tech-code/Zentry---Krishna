// Always scroll to top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Fade out loader after 5 seconds
setTimeout(() => {
  gsap.to(".loader", {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
    },
  });
}, 5000);

