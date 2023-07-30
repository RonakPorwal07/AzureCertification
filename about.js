// about.js

// Interaction 1: Show a greeting message when the page loads
window.onload = function() {
  alert("Welcome to LearningVerse! Explore our educational platform.");
};

// Interaction 2: Submit the form and redirect to the "Thank You" page
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  alert(`Thank you for registering, ${name}! You will receive a confirmation email at ${email}.`);
  window.location.href = "thankyou.html"; // Redirect to the "Thank You" page
});

// Interaction 3: Change the text color of team members on hover
const teamMembers = document.querySelectorAll(".team-member");
teamMembers.forEach(member => {
  member.addEventListener("mouseover", function() {
    this.style.color = "#ff6f00"; // Change text color to orange on hover
  });
  member.addEventListener("mouseout", function() {
    this.style.color = ""; // Reset text color on mouseout
  });
});

// Interaction 4: Show a vision message when clicking on the vision image
const visionImage = document.querySelector(".vision img");
visionImage.addEventListener("click", function() {
  alert("Our Vision: To create a global learning community where individuals can access knowledge, discover their passions, and unlock their full potential.");
});
