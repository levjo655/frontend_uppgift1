function saveSeats() {
  let seats = [];
  const checkBoxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  for (let i = 0; i < checkBoxes.length; i++) {
    seats.push(checkBoxes[i].id);
  }

  localStorage.setItem("selectedSeats", JSON.stringify(seats));
}

document.addEventListener("DOMContentLoaded", function () {
  const getBoxes = JSON.parse(localStorage.getItem("selectedSeats"));
  const ul = document.getElementById("selected-seats-list");
  getBoxes.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  });
});

function confirmation() {
  alert("Booking is complete, check your email inbox");
}

// if (selectedSeats) {
//     const bookingInfoDiv = document.createElement('div');
//     bookingInfoDiv.innerHTML = `<p>Selected Seats: ${selectedSeats.join(', ')}</p>`;
//     bookingForm.prepend(bookingInfoDiv);
// }
