// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("Website Loaded Successfully!");

const restaurantName = document.getElementById("restaurantName");
const title = document.getElementById("title");

restaurantName.addEventListener("input", () => {
    title.textContent = restaurantName.value || "اسم المطعم";
});});
