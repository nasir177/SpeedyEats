document.addEventListener("DOMContentLoaded", function () {
    // Extract food details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const foodName = urlParams.get("name") || "Food Item";
    const foodPrice = urlParams.get("price") || "0";
    const foodImage = urlParams.get("image") || "food-details/default.jpg";  // Default image if missing

    // Set food details on food-detail.html
    document.getElementById("food-name").innerText = foodName;
    document.getElementById("food-price").innerText = "₹" + foodPrice;
    document.getElementById("food-image").src = decodeURIComponent(foodImage);
});
document.addEventListener("DOMContentLoaded", function () {
    const combos = document.querySelectorAll(".combo");

    combos.forEach(combo => {
        let imgSrc = combo.getAttribute("data-img");
        let price = combo.getAttribute("data-price");

        combo.querySelector("img").src = imgSrc;
        combo.querySelector("p").textContent = price;
    });
});
