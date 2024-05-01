document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('form');
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats) {
        const bookingInfoDiv = document.createElement('div');
        bookingInfoDiv.innerHTML = `<p>Selected Seats: ${selectedSeats.join(', ')}</p>`;
        bookingForm.prepend(bookingInfoDiv);
    }
});