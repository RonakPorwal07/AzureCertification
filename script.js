// Interaction 1: Show a greeting message when the page loads
window.onload = function() {
  alert("Welcome to LearningVerse! Explore our educational platform.");
};

// Interaction 2: Allow users to subscribe to the newsletter
function subscribeNewsletter() {
  const email = prompt("Enter your email to subscribe to our newsletter:");
  if (email !== null && email !== "") {
    alert("Thank you for subscribing!");
  } else {
    alert("Please enter a valid email address to subscribe.");
  }
}

// Interaction 3: Change background color on mouseover for "Explore Our Courses" section
const coursesSection = document.querySelector(".courses");
coursesSection.addEventListener("mouseover", function() {
  this.style.backgroundColor = "#f2f2f2";
});

coursesSection.addEventListener("mouseout", function() {
  this.style.backgroundColor = "";
});

// Interaction 4: Implement a simple image slider for featured content
let currentSlide = 0;
const slides = document.querySelectorAll(".feature img");

function showNextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
