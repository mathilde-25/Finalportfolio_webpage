/*
  JavaScript & Animation — Worksheet Examples (1–6)

  IMPORTANT:
  - Normally run ONE example at a time.
  - Examples 5 and 6 can run together because they animate different images.
  - Make sure Examples 2–4 remain commented out (they animate the same element).
*/

document.addEventListener("DOMContentLoaded", () => {

  /* --------------------------------------------------
     Footer year
  -------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --------------------------------------------------
     Shared element references
  -------------------------------------------------- */
  const heroImage = document.getElementById("heroImage");
  const menuImage = document.getElementById("menuImage");
  const cocktailImage = document.getElementById("cocktailImage");
  const description = document.querySelector(".description");


  /* ==================================================
     Example 1 — Fade and Slide (CSS + JS)
     (Currently DISABLED)
  ================================================== */
  /*
  setTimeout(() => {
    if (heroImage) heroImage.classList.add("fade-in");
    if (description) description.classList.add("fade-in");
  }, 300);
  */


  /* ==================================================
     Example 2 — Movement with setInterval()
     (DISABLED)
  ================================================== */
  /*
  let position = 0;
  const speed = 2;
  const maxPosition = 200;

  if (heroImage) {
    const intervalId = setInterval(() => {
      position += speed;
      heroImage.style.transform = `translateX(${position}px)`;

      if (position >= maxPosition) {
        clearInterval(intervalId);
      }
    }, 20);
  }
  */


  /* ==================================================
     Example 3 — Bounce
     (DISABLED)
  ================================================== */
  /*
  if (heroImage) {
    let position = 0;
    let speed = 3;

    const maxPosition = 200;
    const minPosition = 0;

    setInterval(() => {
      position += speed;

      if (position >= maxPosition || position <= minPosition) {
        speed *= -1;
      }

      heroImage.style.transform = `translateX(${position}px)`;
    }, 20);
  }
  */


  /* ==================================================
     Example 4 — Acceleration
     (DISABLED)
  ================================================== */
  /*
  let position = 0;
  let velocity = 0;
  const acceleration = 0.2;

  if (heroImage) {
    const intervalId = setInterval(() => {
      velocity += acceleration;
      position += velocity;

      heroImage.style.transform = `translateX(${position}px)`;

      if (position >= 400) {
        clearInterval(intervalId);
      }
    }, 20);
  }
  */


  /* ==================================================
     Example 5 — First GSAP Animation (Menu image)
     (ENABLED)
  ================================================== */
  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (menuImage) {
    gsap.from(menuImage, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  }


  /* ==================================================
     Example 6 — Second GSAP Animation (Cocktails image)
     (ENABLED)
  ================================================== */
  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (cocktailImage) {
    gsap.from(cocktailImage, {
      x: -150,
      opacity: 0,
      duration: 6,
      ease: "power3.out",
      delay: 0.3
    });
  }

});