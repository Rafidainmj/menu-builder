document.addEventListener("DOMContentLoaded", () => {

    console.log("Website Loaded Successfully!");

    const restaurantName = document.getElementById("restaurantName");
    const title = document.getElementById("title");

    restaurantName.addEventListener("input", () => {
        title.textContent = restaurantName.value || "اسم المطعم";
    });

    const imageInput = document.getElementById("imageInput");
    const previewImage = document.getElementById("previewImage");

    const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const addItem = document.getElementById("addItem");

    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];

        if (file) {
            previewImage.src = URL.createObjectURL(file);
            previewImage.style.display = "block";
        }
    });

});
