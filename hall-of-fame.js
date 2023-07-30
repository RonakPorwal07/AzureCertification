// hall_of_fame.js

// Interaction 1: Show a message when the page loads
window.onload = function() {
  alert("Welcome to the Hall of Fame! Explore our top-performing learners.");
};

// Interaction 2: Change the background color of the page on click
document.body.addEventListener("click", function() {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Interaction 3: Display a message when hovering over learner images
const learners = document.querySelectorAll(".learner");
learners.forEach(learner => {
  learner.addEventListener("mouseover", function() {
    const learnerName = this.querySelector("h3").textContent;
    alert(`Hovering over ${learnerName}'s image!`);
  });
});

// Interaction 4: Toggle visibility of learner information on click
learners.forEach(learner => {
  learner.addEventListener("click", function() {
    const learnerInfo = this.querySelector("p");
    learnerInfo.classList.toggle("hide");
  });
});

// Interaction 5: Scroll to top button
const scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
