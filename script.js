document.addEventListener("DOMContentLoaded", () => {

    console.log("Website Loaded Successfully!");

    const restaurantName = document.getElementById("restaurantName");
    const title = document.getElementById("title");

    const imageInput = document.getElementById("imageInput");
    const previewImage = document.getElementById("previewImage");

    const itemName = document.getElementById("itemName");
    const itemPrice = document.getElementById("itemPrice");
    const addItem = document.getElementById("addItem");

    const createMenu = document.getElementById("createMenu");
    const menuItems = document.getElementById("menuItems");

    restaurantName.addEventListener("input", () => {
        title.textContent = restaurantName.value || "اسم المطعم";
    });

    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];

        if (file) {
            previewImage.src = URL.createObjectURL(file);
            previewImage.style.display = "block";
        }
    });
    createMenu.addEventListener("click", () => {
        title.textContent = restaurantName.value || "اسم المطعم";
    });

    addItem.addEventListener("click", () => {

        if (itemName.value.trim() === "" || itemPrice.value.trim() === "") {
            alert("اكتب اسم الصنف والسعر أولاً");
            return;
        }

        const item = document.createElement("div");
        item.className = "item";

        item.innerHTML = `
            <span>${itemName.value}</span>
            <span>${itemPrice.value} د.ع</span>
        `;

        menuItems.appendChild(item);

        itemName.value = "";
        itemPrice.value = "";
    });

});
