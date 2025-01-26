// Reference to the table
const reservationsTable = document.getElementById('reservationsTable');

// Function to load reservations from Realtime Database
function loadReservations() {
    db.ref('reservations').on('value', (snapshot) => {
        const reservations = snapshot.val();
        let rows = '';
        for (const id in reservations) {
            const reservation = reservations[id];
            rows += `
                <tr>
                    <td>${reservation.name}</td>
                    <td>${reservation.email}</td>
                    <td>${reservation.service}</td>
                    <td>${reservation.date}</td>
                </tr>
            `;
        }
        reservationsTable.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Date</th>
            </tr>
            ${rows}
        `;
    }, (error) => {
        console.error('Error loading reservations:', error);
    });
}

// Load reservations on page load
window.addEventListener('load', () => {
    loadReservations();
});
