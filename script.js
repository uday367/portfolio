<<<<<<< HEAD
console.log("Script Loaded");
var typed = new Typed(".typing", {
  strings: [
    "Computer Science Student",
    "AI Enthusiast",
    "Deep Learning Developer",
    "Web Developer",
    "Machine Learning Explorer",
  ],

  typeSpeed: 70,

  backSpeed: 40,

  backDelay: 1500,

  loop: true,
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};
const hiddenElements = document.querySelectorAll("section");

const sectionobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  sectionobserver.observe(el);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 2000);
});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});
const hoverElements = document.querySelectorAll(
  "a,button,.project-card,.skill-card",
);

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    glow.style.width = "60px";

    glow.style.height = "60px";

    glow.style.opacity = ".8";
  });

  el.addEventListener("mouseleave", () => {
    glow.style.width = "30px";

    glow.style.height = "30px";

    glow.style.opacity = ".6";
  });
});
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const current = parseFloat(counter.innerText);

    const increment = target / 100;

    if (current < target) {
      counter.innerText = (current + increment).toFixed(
        target % 1 !== 0 ? 1 : 0,
      );

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    // Toggles the visibility of the menu
    navLinks.classList.toggle("active");

    // Optional: Changes ☰ to ✕ when open
    if (navLinks.classList.contains("active")) {
      menuToggle.innerHTML = "✕";
    } else {
      menuToggle.innerHTML = "☰";
    }
  });

  // Optional: Close the menu when a link is clicked (good for one-page portfolios)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.innerHTML = "☰";
    });
  });
});
=======
console.log("Script Loaded");
var typed = new Typed(".typing", {
  strings: [
    "Computer Science Student",
    "AI Enthusiast",
    "Deep Learning Developer",
    "Web Developer",
    "Machine Learning Explorer",
  ],

  typeSpeed: 70,

  backSpeed: 40,

  backDelay: 1500,

  loop: true,
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};
const hiddenElements = document.querySelectorAll("section");

const sectionobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  sectionobserver.observe(el);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 2000);
});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});
const hoverElements = document.querySelectorAll(
  "a,button,.project-card,.skill-card",
);

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    glow.style.width = "60px";

    glow.style.height = "60px";

    glow.style.opacity = ".8";
  });

  el.addEventListener("mouseleave", () => {
    glow.style.width = "30px";

    glow.style.height = "30px";

    glow.style.opacity = ".6";
  });
});
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const current = parseFloat(counter.innerText);

    const increment = target / 100;

    if (current < target) {
      counter.innerText = (current + increment).toFixed(
        target % 1 !== 0 ? 1 : 0,
      );

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    // Toggles the visibility of the menu
    navLinks.classList.toggle("active");

    // Optional: Changes ☰ to ✕ when open
    if (navLinks.classList.contains("active")) {
      menuToggle.innerHTML = "✕";
    } else {
      menuToggle.innerHTML = "☰";
    }
  });

  // Optional: Close the menu when a link is clicked (good for one-page portfolios)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.innerHTML = "☰";
    });
  });
});
>>>>>>> dc938168301396da6183844cad4f3e94ba65d431
