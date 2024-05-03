document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".seat");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
      this.classList.toggle("selected");
      window.location.href = "booking.html";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bookNowButton = document.querySelector(".book-now");

  bookNowButton.addEventListener("click", function () {
    const selectedSeats = document.querySelectorAll(".seat:checked");
    const selectedSeatNumbers = [];

    selectedSeats.forEach(function (seat) {
      selectedSeatNumbers.push(seat.id);
    });

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatNumbers));

    window.location.href = "booking.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");

  button.addEventListener("click", function () {
    window.location.href = "booking.html";
  });
});
