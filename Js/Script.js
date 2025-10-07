document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  document.addEventListener("DOMContentLoaded", showSlides);

/* =========================
   LIGHTBOX IMAGE VIEWER
========================= */
document.addEventListener('DOMContentLoaded', function() {
  // Get all the necessary elements
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close');
  const galleryImages = document.querySelectorAll('.gallery-container img');

  // Loop through each gallery image and add a click event listener
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block'; // Show the lightbox
      lightboxImg.src = img.src; // Set the lightbox image source to the clicked image's source
    });
  });

  // Function to close the lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  // Close the lightbox when the close button is clicked
  closeBtn.addEventListener('click', closeLightbox);

  // Also close the lightbox when clicking on the background overlay
  lightbox.addEventListener('click', (e) => {
    // Only close if the clicked element is the lightbox background itself, not the image
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});