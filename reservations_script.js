// Reference to the reservation form
const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reservation = {
        name: reservationForm.name.value,
        email: reservationForm.email.value,
        service: reservationForm.service.value,
        date: reservationForm.date.value,
    };

    // Add reservation to Firebase Realtime Database
    realtimedb.ref('reservations').push(reservation, (error) => {
        if (error) {
            console.error('Error adding reservation:', error);
            alert('Error adding reservation. Please try again.');
        } else {
            console.log('Reservation added:', reservation);
            alert('Reservation submitted! We will contact you shortly.');
            reservationForm.reset();
        }
    });
});
