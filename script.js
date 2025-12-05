/*********************************************
  FEATURE  — SCROLL ANIMATIONS
*********************************************/
const scrollElements = document.querySelectorAll(".scroll-reveal");

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      scrollObserver.unobserve(entry.target);
    }
  });
});

scrollElements.forEach(el => scrollObserver.observe(el));


/*********************************************
  FEATURE  — PRICE CALCULATOR (BROKERAGE ESTIMATOR)
*********************************************/
function calculateBrokerage() {
  const trades = document.getElementById("tradeCount").value;
  const result = document.getElementById("calcResult");

  if (trades === "" || trades < 0) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  const brokerage = trades * 20; // ₹20 per trade
  result.textContent = `Estimated monthly brokerage: ₹${brokerage}`;
}


/*********************************************
  FEATURE  — CARD HOVER INTERACTIVITY
*********************************************/
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("card-active");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-active");
  });
});


/*********************************************
  FEATURE  — CONTACT FORM VALIDATION
*********************************************/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    let errors = [];

    if (name.trim().length < 3) errors.push("Name must be at least 3 characters.");
    if (!email.includes("@")) errors.push("Enter a valid email.");
    if (message.trim().length < 10) errors.push("Message must be at least 10 characters.");

    const result = document.getElementById("formResult");

    if (errors.length > 0) {
      result.style.color = "red";
      result.textContent = errors.join(" ");
    } else {
      result.style.color = "lightgreen";
      result.textContent = "Message sent successfully!";
      form.reset();
    }
  });
});


/*********************************************
  FEATURE  — ROTATION CONTROLS FOR HERO IMAGE
*********************************************/
const rotator = document.querySelector(".rotate-y");

if (rotator) {
  rotator.addEventListener("mouseenter", () => {
    rotator.style.animationPlayState = "paused";
  });

  rotator.addEventListener("mouseleave", () => {
    rotator.style.animationPlayState = "running";
  });

  rotator.addEventListener("click", () => {
    rotator.style.animationDuration = "2s";  // speed boost
    setTimeout(() => {
      rotator.style.animationDuration = "6s";  // return to normal
    }, 2000);
  });
}

/*********************************************
  FEATURE 5 — HOVER EFFECT FOR WHY CARDS (NEW)
*********************************************/
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("card-active");  // <-- same animation class as product cards
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-active");
  });
});
