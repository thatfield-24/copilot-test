// Reference to the table
const reservationsTable = document.getElementById('reservationsTable');

// Function to load reservations from Firestore
async function loadReservations() {
    try {
        const snapshot = await db.collection('reservations').get();
        const reservations = snapshot.docs.map(doc => doc.data());

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
    } catch (error) {
        console.error('Error fetching reservations from Firestore:', error);
    }
}

// Load reservations on page load
window.addEventListener('load', () => {
    loadReservations();
});
