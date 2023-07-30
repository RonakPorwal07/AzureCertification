// interactions.js

// Interaction 1: Show a greeting message when the page loads
window.onload = function() {
  alert("Welcome to LearningVerse! Explore our educational platform.");
};



// Interaction 6: Change background color on button click
const changeColorBtn = document.getElementById("changeColorBtn");
changeColorBtn.addEventListener("click", function() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Interaction 2: Navigate to the About page when clicking the "About" link
const aboutLink = document.querySelector("a[href='about.html']");
aboutLink.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about.html";
});

// Interaction 3: Navigate to the Hall of Fame page when clicking the "Hall of Fame" link
const hallOfFameLink = document.querySelector("a[href='hall_of_fame.html']");
hallOfFameLink.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "hall_of_fame.html";
});

// Interaction 4: Show a message when the user clicks the logo image
const logoImage = document.querySelector(".hero img");
logoImage.addEventListener("click", function() {
  alert("You clicked the LearningVerse logo!");
});

// Interaction 5: Toggle the visibility of the team member information on click
const teamMembers = document.querySelectorAll(".team-member");
teamMembers.forEach(member => {
  member.addEventListener("click", function() {
    const memberInfo = this.querySelector("p");
    memberInfo.classList.toggle("hide");
  });
});
  // Interaction 7: Fetch data from Azure Function when the page loads

function fetchFromAzureFunction() {
  fetch('https://MyFunctionAPP-Ronak.azurewebsites.net/api/hello')
    .then(response => response.text())
    .then(data => {
      console.log(data); // This will log "Hello, Azure Function!" to the console.
      // You can now use the 'data' to update your website's content as needed.
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Call the function to fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchFromAzureFunction);



