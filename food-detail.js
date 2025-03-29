document.addEventListener("DOMContentLoaded", function () {
    // Extract food details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const foodName = urlParams.get("name") || "Food Item";
    const foodPrice = parseFloat(urlParams.get("price")) || 0; // Convert to number
    const foodImage = urlParams.get("image") || "food-details/default.jpg"; // Default image
    const discountPercent = parseFloat(urlParams.get("discount")) || 0; // Convert to number

    // Calculate original price before discount
    const originalPrice = Math.round(foodPrice / (1 - discountPercent / 100));

    // Update the page elements
    document.getElementById("food-name").textContent = foodName;
    document.getElementById("food-image").src = foodImage;
    document.getElementById("food-image").alt = foodName;

    // Corrected display: Food price should be the final discounted price
    document.getElementById("food-price").textContent = `₹${foodPrice.toFixed(2)}`;
    document.querySelector(".original").textContent = `₹${originalPrice}`;
    document.querySelector(".original").style.textDecoration = "line-through"; // Strikethrough for original price

    // Show discount only if applicable
    if (discountPercent > 0) {
        document.querySelector(".discount").textContent = `${discountPercent}% Off`;
    } else {
        document.querySelector(".discount").textContent = ""; // Hide if no discount
    }
 // Set the same food image in the combo section
 const combos = document.querySelectorAll(".combo");
 combos.forEach(combo => {
     combo.querySelector("img").src = foodImage; // Use the same image from the main item
 });
  
});
function updateLocation() {
    const userInput = document.getElementById("user-location").value;
    alert("Location updated to: " + userInput);
}
function toggleDescription(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}