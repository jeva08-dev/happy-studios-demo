// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }
});


// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


// SCROLL REVEAL
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});


// CURRENT YEAR
document.getElementById("year").textContent = new Date().getFullYear();


// DEMO BUTTONS
document.querySelectorAll(".demo-button").forEach(button => {
  button.addEventListener("click", () => {
    alert(
      "Demo button — connect this to Happy Studios' actual WhatsApp number after the owner approves the website."
    );
  });
});
