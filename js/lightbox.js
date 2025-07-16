document.addEventListener('DOMContentLoaded', function() {
  // Select all wrappers
  const wrappers = document.querySelectorAll('.image-wrapper');
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('lightbox-image');
  const captionText = document.getElementById('lightbox-caption');
  const closeBtn = modal.querySelector('.close');

  wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      modal.style.display = "block";
      modalImg.src = wrapper.dataset.src;
      modalImg.alt = wrapper.dataset.caption;
      captionText.textContent = wrapper.dataset.caption;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  // Close modal if user clicks outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
