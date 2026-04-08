// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    let section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// CONTACT BUTTON
function contactMe() {
  alert("Thank you for visiting my portfolio 😊");
}

// CARD CLICK EFFECT
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", function() {
    this.style.background = "#d0ebff";
  });
});