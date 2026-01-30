
function showSection(section) {
  // Hide all sections
  document.querySelector('.skills').classList.remove('active-content');
  document.querySelector('.projects').classList.remove('active-content');
  document.querySelector('.participation').classList.remove('active-content');

  // Remove active from buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // Show selected
  document.querySelector(`.${section}`).classList.add('active-content');
  document.querySelector(`.tab-btn[data-target='${section}']`).classList.add('active');
}
 