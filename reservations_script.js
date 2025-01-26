// Your Firebase configuration is already included in firebaseConfig.js

const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const reservation = {
        name: reservationForm.name.value,
        email: reservationForm.email.value,
        service: reservationForm.service.value,
        date: reservationForm.date.value,
    };
    
    try {
        await db.collection('reservations').add(reservation);
        console.log('Reservation added to Firestore:', reservation);
        alert('Reservation submitted! We will contact you shortly.');
    } catch (error) {
        console.error('Error adding reservation to Firestore:', error);
        alert('Error adding reservation. Please try again.');
    }

    reservationForm.reset();
});
