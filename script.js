// Your Firebase configuration is already included in firebaseConfig.js

const homeBtn = document.getElementById('homeBtn');
const servicesBtn = document.getElementById('servicesBtn');
const homeSection = document.getElementById('homeSection');
const servicesSection = document.getElementById('servicesSection');

homeBtn.addEventListener('click', () => {
    showSection(homeSection);
});

servicesBtn.addEventListener('click', () => {
    showSection(servicesSection);
});

function showSection(section) {
    homeSection.style.display = 'none';
    servicesSection.style.display = 'none';
    section.style.display = 'block';
}

showSection(homeSection);
