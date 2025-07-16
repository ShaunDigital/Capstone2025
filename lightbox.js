// lightbox.js

// Get elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

// Select all portfolio images
const portfolioItems = document.querySelectorAll('.portfolio-item img');

portfolioItems.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt || img.parentElement.querySelector('p').textContent;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  });
});

// Close lightbox on clicking close button or outside image
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
  lightboxCaption.textContent = '';
  document.body.style.overflow = 'auto';
}
