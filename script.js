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

reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reservation = {
        name: reservationForm.name.value,
        email: reservationForm.email.value,
        service: reservationForm.service.value,
        date: reservationForm.date.value,
    };
    reservations.push(reservation);
    db.setItem('reservations', JSON.stringify(reservations));
    alert('Reservation submitted! We will contact you shortly.');
    reservationForm.reset();
});

function showSection(section) {
    homeSection.style.display = 'none';
    servicesSection.style.display = 'none';
    reservationsSection.style.display = 'none';
    section.style.display = 'block';
}

showSection(homeSection);
