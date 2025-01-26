const homeBtn = document.getElementById('homeBtn');
const servicesBtn = document.getElementById('servicesBtn');
const reservationsBtn = document.getElementById('reservationsBtn');
const homeSection = document.getElementById('homeSection');
const servicesSection = document.getElementById('servicesSection');
const reservationsSection = document.getElementById('reservationsSection');
const reservationForm = document.getElementById('reservationForm');

const reservations = JSON.parse(db.getItem('reservations')) || [];

homeBtn.addEventListener('click', () => {
    showSection(homeSection);
});

servicesBtn.addEventListener('click', () => {
    showSection(servicesSection);
});

reservationsBtn.addEventListener('click', () => {
    showSection(reservationsSection);
});

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
    }

    reservationForm.reset
});

function showSection(section) {
    homeSection.style.display = 'none';
    servicesSection.style.display = 'none';
    reservationsSection.style.display = 'none';
    section.style.display = 'block';
}

showSection(homeSection);
