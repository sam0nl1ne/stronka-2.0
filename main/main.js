document.addEventListener('DOMContentLoaded', () => {
    const contentFrame = document.getElementById('content-frame');
    
    // Map the button IDs to their corresponding HTML files or URLs
    const routeMap = {
        'btn-music': 'music.html',
        'btn-interests': 'interests.html',
        'btn-home': 'home.html',
        'btn-community': 'community.html',
        'btn-guestbook': 'guestbook.html',
        'btn-contact': 'contact.html',
        'btn-rings': 'rings.html'
    };

    const buttons = document.querySelectorAll('.organ-btn');
    
    // Add click event listeners to update the iframe source
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetPage = routeMap[event.target.id];
            
            if (targetPage) {
                // If running locally without files, you can test with a data URI payload
                // contentFrame.src = `data:text/html;charset=utf-8,<h1>${event.target.innerText}</h1>`;
                
                // Standard implementation: load the actual file
                contentFrame.src = targetPage;
            }
        });
    });
});