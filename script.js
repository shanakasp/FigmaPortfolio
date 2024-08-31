document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".ToggleButton");
  const menuItems = document.querySelector(".MenuItems");

  if (toggleButton && menuItems) {
    toggleButton.addEventListener("click", function () {
      menuItems.classList.toggle("show");
    });
  }
});
