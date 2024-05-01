document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".seat");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
      this.classList.toggle("selected");
      window.location.href = "booking.html";
    });
  });
});
