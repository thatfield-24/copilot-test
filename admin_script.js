const reservationsTable = document.getElementById('reservationsTable');
const reservations = JSON.parse(db.getItem('reservations')) || [];

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

loadReservations();
