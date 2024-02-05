document.addEventListener("DOMContentLoaded", function () {
    const smoothScroll = function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.location.href = this.getAttribute('href');
        }
    };

    const addSmoothScroll = (selectors) => {
        document.querySelectorAll(selectors).forEach(link => link.addEventListener('click', smoothScroll));
    };

    addSmoothScroll('.nav-list li a, .welcome-container a');

    const addDropdownToggle = () => {
        const navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        const navToggle = document.getElementById('nav-toggle');

        navLinks.forEach(link => link.addEventListener('click', function (e) {
            const dropdown = this.nextElementSibling;
            if (dropdown) {
                dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
                e.stopPropagation();
            }
        }));

        document.addEventListener('click', () => dropdowns.forEach(dropdown => dropdown.style.display = 'none'));

        if (navToggle) {
            navToggle.addEventListener('click', function () {
                const navUl = document.querySelector('nav ul');
                if (navUl) navUl.style.display = (navUl.style.display === 'none' || navUl.style.display === '') ? 'block' : 'none';
                this.classList.toggle('active');
            });
        }
    };

    addDropdownToggle();
});
