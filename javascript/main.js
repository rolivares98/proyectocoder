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
