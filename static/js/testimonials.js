async function loadTestimonials() {
    const response = await fetch('/static/json/testimonials.json');
    const testimonials = await response.json();
  
    const testimonialsList = document.getElementById('testimonials-list');
  
    testimonials.forEach((testimonial, index) => {
      const item = document.createElement('li');
      item.classList.add('testimonials-item');
  
      item.innerHTML = `
        <div class="content-card" data-testimonials-item data-index="${index}">
          <figure class="testimonials-avatar-box">
            <img src="${testimonial.avatar}" alt="${testimonial.name}" width="60">
          </figure>
          <h4 class="h4 testimonials-item-title">${testimonial.name}</h4>
          <div class="testimonials-text">
            <p>${testimonial.text}</p>
          </div>
        </div>
      `;
  
      testimonialsList.appendChild(item);
    });
  
    setupModal(testimonials);
}
  
function setupModal(testimonials) {
  const modalContainer = document.querySelector('[data-modal-container]');
  const overlay = document.querySelector('[data-overlay]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDate = document.getElementById('modal-date');
  const modalText = document.getElementById('modal-text');
  const testimonialsList = document.getElementById('testimonials-list');

  // Open modal
  testimonialsList.addEventListener('click', function(e) {
    const card = e.target.closest('[data-testimonials-item]');
    if (!card) return;

    const index = card.getAttribute('data-index');
    const data = testimonials[index];

    modalImg.src = data.avatar;
    modalImg.alt = data.name;
    modalTitle.textContent = data.name;
    modalDate.textContent = new Date(data.date).toLocaleDateString();
    modalDate.setAttribute('datetime', data.date);
    modalText.innerHTML = `<p>${data.text}</p>`;

    modalContainer.classList.add('active');
  });

  // Close modal
  modalCloseBtn.addEventListener('click', () => modalContainer.classList.remove('active'));
  overlay.addEventListener('click', () => modalContainer.classList.remove('active'));
}

// Load testimonials when the page is ready
loadTestimonials();
  