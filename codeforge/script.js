// JavaScript to dynamically change the cursor
document.body.style.cursor = 'url("images/3 1.png"), auto'; // Adjust the path
const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    