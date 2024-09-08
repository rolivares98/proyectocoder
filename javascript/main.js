// main.js
document.getElementById('storyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const title = document.getElementById('storyTitle').value.trim();
  const content = document.getElementById('storyContent').value.trim();

  if (title && content) {
      const storyContainer = document.createElement('div');
      storyContainer.className = 'story';
      
      const storyTitle = document.createElement('h3');
      storyTitle.textContent = title;
      
      const storyContent = document.createElement('p');
      storyContent.textContent = content;
      
      storyContainer.appendChild(storyTitle);
      storyContainer.appendChild(storyContent);
      
      document.getElementById('storiesContainer').appendChild(storyContainer);

      // Reset form fields
      document.getElementById('storyForm').reset();
  } else {
      alert('Por favor, complete ambos campos antes de enviar.');
  }
});
// Funcionalidad para el menú en pantallas pequeñas
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Mostrar/ocultar el menú
  navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });

  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
          navLinks.classList.remove('active');
      });
  });
});
function showImage(src) {
    document.getElementById('lightboxImage').src = src;
}
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Dejar de observar la tarjeta una vez que ha sido vista
      }
    });
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});

// Obtener elementos del modal, imagen dentro del modal y caption
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const thumbnails = document.querySelectorAll(".thumbnail");

// Mostrar el modal con la imagen y caption al hacer clic en la miniatura
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Cerrar el modal al hacer clic en el botón de cierre
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});