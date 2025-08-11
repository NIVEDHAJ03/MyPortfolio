function showSection(section) {
  // Hide all sections
  document.querySelector('.skills').classList.remove('active-content');
  document.querySelector('.certificates').classList.remove('active-content');
  document.querySelector('.projects').classList.remove('active-content');

  // Remove active from buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // Show selected
  document.querySelector(`.${section}`).classList.add('active-content');
  document.querySelector(`.tab-btn[data-target='${section}']`).classList.add('active');
}
 function scrollCertificates(direction) {
  const container = document.getElementById('certificates-container');
  const imageWidth = 220;  // 200px + 20px margin
  const visibleCount = 2;  // Show 2 images
  const scrollAmount = imageWidth * visibleCount; // 440px per scroll

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

