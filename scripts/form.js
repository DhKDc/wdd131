const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
// Get the select element
const productSelect = document.getElementById("product");

// Function to populate product options
function populateProductOptions() {
  // Loop through the products array
  products.forEach(product => {
    // Create a new option element
    const option = document.createElement("option");
    // Set the option's value and text content
    option.value = product.name;
    option.textContent = product.name;
    // Add the option to the select element
    productSelect.appendChild(option);
  });
}

// Call the function to populate options when the page loads
populateProductOptions();

// Function to increment review counter in localStorage
function incrementReviewCounter() {
  // Get the current count from localStorage or initialize to 0
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  // Increment the count
  reviewCount++;
  // Store the updated count in localStorage
  localStorage.setItem("reviewCount", reviewCount);
  // Display the count on the review.html page (you'll need an element with an ID like "reviewCount" in review.html)
  // document.getElementById("reviewCount").textContent = `You have completed ${reviewCount} reviews.`;
}

// Add an event listener to the form for submission
const form = document.querySelector("form");
form.addEventListener("submit", incrementReviewCounter);
