function saveSeats() {
  let seats = [];
 //select all checked boxes and save them to checkboxes
  const checkBoxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  
  //loop through all checked boxes and push through each id to the checkboxes array
  for (let i = 0; i < checkBoxes.length; i++) {
    seats.push(checkBoxes[i].id);
  }
//save seats array to local storage in json format
  localStorage.setItem("selectedSeats", JSON.stringify(seats));
}

document.addEventListener("DOMContentLoaded", function () {
 //get local storage and save to getboxes
    const getBoxes = JSON.parse(localStorage.getItem("selectedSeats"));
  
  // loop throught each elemnt in getboxes and create an append li for each element in local storage
    const ul = document.getElementById("selected-seats-list");
  getBoxes.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  });
});

//pop up window to confirm
function confirmation() {
  alert("Booking is complete, check your email inbox");
}


