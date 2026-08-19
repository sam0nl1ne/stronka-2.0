document.addEventListener('DOMContentLoaded', () => {
    const contentFrame = document.getElementById('content-frame');
    const routeMap = {
        'btn-music': 'music.html',
        'btn-interests': 'interests.html',
        'btn-home': 'home.html',
        'btn-community': 'community.html',
        'btn-guestbook': 'guestbook.html',
        'btn-contact': 'contact.html',
        'btn-rings': 'rings.html'
    };

    document.querySelectorAll('.organ-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = routeMap[button.id];
            if (targetPage) {
                contentFrame.src = targetPage;
            }
        });
    });
});