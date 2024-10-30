// Function to toggle the visibility of the popup menu
function toggleMenu() {
    const menu = document.getElementById('popup-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Close the menu if clicking outside of it
window.addEventListener('click', function(event) {
    const menu = document.getElementById('popup-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (menu.style.display === 'block' && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = 'none';
    }
});
