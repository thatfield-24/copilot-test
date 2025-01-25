// Get elements
const homeBtn = document.getElementById('homeBtn');
const servicesBtn = document.getElementById('servicesBtn');
const reservationsBtn = document.getElementById('reservationsBtn');
const adminBtn = document.getElementById('adminBtn');

const homeSection = document.getElementById('homeSection');
const servicesSection = document.getElementById('servicesSection');
const reservationsSection = document.getElementById('reservationsSection');
const adminSection = document.getElementById('adminSection');

const reservationForm = document.getElementById('reservationForm');
const reservationsTable = document.getElementById('reservationsTable');

// Array to store reservations
const reservations = [];

// Event listeners for navigation buttons
homeBtn.addEventListener('click', () => {
    showSection(homeSection);
});

servicesBtn.addEventListener('click', () => {
    showSection(servicesSection);
});

reservationsBtn.addEventListener('click', () => {
    showSection(reservationsSection);
});

adminBtn.addEventListener('click', () => {
    showSection(adminSection);
    loadReservations();
});

// Event listener for form submission
reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reservation = {
        name: reservationForm.name.value,
        email: reservationForm.email.value,
        service: reservationForm.service.value,
        date: reservationForm.date.value,
    };
    reservations.push(reservation);
    alert('Reservation submitted! We will contact you shortly.');
    reservationForm.reset();
});

// Function to display a specific section
function showSection(section) {
    homeSection.style.display = 'none';
    servicesSection.style.display = 'none';
    reservationsSection.style.display = 'none';
    adminSection.style.display = 'none';
    section.style.display = 'block';
}

// Function to load reservations into the table
function loadReservations() {
    const rows = reservations.map(reservation => `
        <tr>
            <td>${reservation.name}</td>
            <td>${reservation.email}</td>
            <td>${reservation.service}</td>
            <td>${reservation.date}</td>
        </tr>
    `).join('');
    reservationsTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Date</th>
        </tr>
        ${rows}
    `;
}

// Default to showing the home section
showSection(homeSection);
