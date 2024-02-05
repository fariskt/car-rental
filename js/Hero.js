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

    document.querySelectorAll('.nav-list li a , .welcome-container a').forEach(link => {
        link.addEventListener('click', function (e) {
            smoothScroll.call(this, e);
        });
    });

    const currentLocation = window.location.hash;
    if (currentLocation) {
        const currentLink = document.querySelector(`.nav-list li a[href='${currentLocation}']`);
        if (currentLink) {
            setActiveClass(currentLink);
        }
    }

    // const navToggle = document.getElementById('nav-toggle');
    // if (navToggle) {
    //     navToggle.addEventListener('click', function () {
    //         const navUl = document.querySelector('.nav-list');
    //         if (navUl) navUl.classList.toggle('active');
    //         this.classList.toggle('active');
    //     });
    // }
});
