window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-container');
    const navLinks = document.querySelectorAll('.nav-list li a');
    const targetDiv = document.querySelector('.head-container');
    const custom_icon = this.document.querySelector('.custom-icon');

    const divBottom = targetDiv.getBoundingClientRect().bottom + window.scrollY;
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    navLinks.forEach(link => {
        if (window.scrollY > divBottom) {
            
            link.classList.add('scrolled-a');
        } else {
            link.classList.remove('scrolled-a');
        }
    });

    if(this.window.scrollY > divBottom) {
        custom_icon.classList.add('scrolled-icon');
        document.querySelector(".logo-name").style.color = "#E88D67";
    } else {
        document.querySelector(".logo-name").style.color = "white";
        custom_icon.classList.remove('scrolled-icon')
    }
});

