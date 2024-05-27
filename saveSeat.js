function saveSeats() {
  const bookedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
  let newSeats = [...bookedSeats];

  const checkBoxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );

  for (let i = 0; i < checkBoxes.length; i++) {
    if (!newSeats.includes(checkBoxes[i].id)) {
      newSeats.push(checkBoxes[i].id);
    }
  }
  localStorage.setItem("selectedSeats", JSON.stringify(newSeats));
}
