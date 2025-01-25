const homeBtn = document.getElementById('homeBtn');
const servicesBtn = document.getElementById('servicesBtn');
const reservationsBtn = document.getElementById('reservationsBtn');
const homeSection = document.getElementById('homeSection');
const servicesSection = document.getElementById('servicesSection');
const reservationsSection = document.getElementById('reservationsSection');
const reservationForm = document.getElementById('reservationForm');

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
    alert('Reservation submitted! We will contact you shortly.');
    reservationForm.reset();
});

function showSection(section) {
    homeSection.style.display = 'none';
    servicesSection.style.display = 'none';
    reservationsSection.style.display = 'none';
    section.style.display = 'block';
}

