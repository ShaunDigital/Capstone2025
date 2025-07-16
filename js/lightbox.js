// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('lightbox-image');
  const captionText = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.close');

  // Open lightbox when image wrapper clicked
  document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const src = wrapper.getAttribute('data-src');
      const caption = wrapper.getAttribute('data-caption');

      modal.style.display = 'block';
      modalImg.src = src;
      modalImg.alt = caption;
      captionText.textContent = caption;
    });
  });

  // Close lightbox on close button click
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
    captionText.textContent = '';
  });

  // Also close lightbox when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
      captionText.textContent = '';
    }
  });
});
