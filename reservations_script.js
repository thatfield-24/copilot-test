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
    db.collection('reservation').add(reservation);
	realtimedb.ref('reservations').set(reservation);
});
