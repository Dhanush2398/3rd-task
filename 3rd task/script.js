


// Form Submission Handling
function submitForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var sellGold = document.getElementById("sellGold").checked;
    var releaseGold = document.getElementById("releaseGold").checked;

    // Validation
    if (name === "" || phone === "") {
        alert("Please fill in all required fields.");
        return;
    }
    if (!sellGold && !releaseGold) {
        alert("Please select an option.");
        return;
    }

    // Success Message
    alert("Form Submitted Successfully!");
    closePopup();
}



function calculateGoldRate() {
  // Get selected gold type and weight input
  const goldType = document.getElementById("gold-type").value;
  const weight = parseFloat(document.getElementById("gold-weight").value);

  // Define gold rates per gram for each type
  const goldRates = {
      "24k": 7250, // Example rate for 24k gold per gram
      "22k": 7000, // Example rate for 22k gold per gram
      "18k": 5800, // Example rate for 18k gold per gram
      "14k": 5380, // Example rate for 14k gold per gram
  };
  
  // Check if weight is valid
  if (isNaN(weight) || weight <= 0) {
      document.getElementById("gold-price").textContent = "Please enter a valid weight.";
      return;
  }

  // Calculate price based on gold type and weight
  if (goldRates[goldType]) {
      const price = goldRates[goldType] * weight;
      document.getElementById("gold-price").textContent = `Estimated Price: ₹${price.toFixed(2)}`;
  } else {
      document.getElementById("gold-price").textContent = "Please select a valid gold type.";
  }
}
let index = 0;
const images = document.querySelectorAll(".gallery img");
const gallery = document.querySelector(".gallery");

function moveGallery() {
    index++;
    if (index >= images.length) index = 0;
    gallery.style.transform = `translateX(${-index * (100 + 2)}vw)`; // Adjusted for spacing
}

setInterval(moveGallery, 5000);









const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            const content = accordionItem.querySelector('.accordion-content');

            // Toggle the active class to show/hide the content
            accordionItem.classList.toggle('active');

            // Close other accordion items
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });
        });
    });