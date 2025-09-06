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

// --------------Page 1-------------------

gsap.from(".page1", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  borderRadius: "0 0 0 0",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".page1",
    start: "center center",
    end: "bottom center",
    scrub: !0,
  },
});

gsap.to(".player", {
  borderBottomLeftRadius: "7vw",
  scrollTrigger: {
    trigger: ".page1",
    start: "center center",
    end: "bottom center",
    scrub: !0,
  },
});

gsap.to(".videos video", {
  borderBottomLeftRadius: "7vw",
  scrollTrigger: {
    trigger: ".page1",
    start: "center center",
    end: "bottom center",
    scrub: !0,
  },
});

const image = document.querySelector(".videos2 video");
const videos = document.querySelector(".videos video");
const player = document.querySelector(".player video");

const videoData = [
  {
    imageSrc: "/Videos/hero-cut-3.mp4",
    videosSrc: "/Videos/hero-cut-2.mp4",
    playerSrc: "/Videos/hero-cut-2.mp4",
  },
  {
    imageSrc: "/Videos/hero-cut-4.mp4",
    videosSrc: "/Videos/hero-cut-3.mp4",
    playerSrc: "/Videos/hero-cut-3.mp4",
  },
  {
    imageSrc: "/Videos/hero-cut-1.mp4",
    videosSrc: "/Videos/hero-cut-4.mp4",
    playerSrc: "/Videos/hero-cut-4.mp4",
  },
  {
    imageSrc: "/Videos/hero-cut-2.mp4",
    videosSrc: "/Videos/hero-cut-1.mp4",
    playerSrc: "/Videos/hero-cut-1.mp4", // ✅ Fixed typo here
  },
];

let flag = 0;

image.addEventListener("click", () => {
  const { imageSrc, videosSrc, playerSrc } = videoData[flag];

  // Hide image during transition
  image.style.display = "none";

  // Delay to swap image source and fade back in
  setTimeout(() => {
    image.src = imageSrc;
    image.style.display = "block";
  }, 1000);

  // Update background video
  videos.src = videosSrc;

  // Update player video after delay
  setTimeout(() => {
    player.pause();
    player.src = playerSrc;
  }, 1000);

  // Ensure video is visible
  videos.style.opacity = 1;

  // Animate size transition
  gsap.set(videos, { height: "225px", width: "225px" });
  gsap.to(videos, { height: "100%", width: "100%", duration: 1 });

  // Move to next index
  flag = (flag + 1) % videoData.length;
});
