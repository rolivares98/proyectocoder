// main.js
document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('storyTitle').value;
    const content = document.getElementById('storyContent').value;

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
    }
});
// Funcionalidad para el menú en pantallas pequeñas
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
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
        }
      });
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });
