// Lock scroll on page load
document.body.style.overflow = "hidden";

// Reset scroll position on refresh
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
      // Hide loader
      document.querySelector(".loader").style.display = "none";

      // Unlock scroll
      document.body.style.overflow = "auto";
    },
  });
}, 5000);

