// Language Selector
const languageSelector = document.querySelector('#language-selector');
languageSelector.addEventListener('change', (e) => {
  const selectedLanguage = e.target.value;
  alert(`Language changed to ${selectedLanguage}`);
  // Implement language-switching logic here
});

// Google Maps
function initMap() {
  const officeLocation = { lat: 32.2994, lng: -9.2372 }; // Coordinates for Safi, Morocco
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: officeLocation,
  });

  const marker = new google.maps.Marker({
    position: officeLocation,
    map: map,
    title: "Notaire's Office",
  });
}

// Contact Form Submission
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  contactForm.reset();
});

 