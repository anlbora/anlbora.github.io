document.addEventListener('DOMContentLoaded', function () {
    // Set initial theme based on local storage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    const themeStyle = document.getElementById('theme-style');
    const toggleSwitch = document.getElementById('theme-toggle');

    if (currentTheme === 'dark') {
        themeStyle.href = '/CSS/blog/dark.css';
        toggleSwitch.checked = true;
    } else {
        themeStyle.href = '/CSS/blog/light.css';
        toggleSwitch.checked = false;
    }

    // Toggle theme on switch change
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            themeStyle.href = '/CSS/blog/dark.css';
            localStorage.setItem('theme', 'dark');
        } else {
            themeStyle.href = '/CSS/blog/light.css';
            localStorage.setItem('theme', 'light');
        }
    });

    // Additional functionalities
    // Function to smoothly scroll to the top
    function scrollToTop(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 'Up' logo click event listener
    const upLogo = document.getElementById('upLogo');
    if (upLogo) {
        upLogo.addEventListener('click', scrollToTop);
    }

    // Toggle menu visibility on hamburger click
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', function () {
        menu.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Toggle additional text in cards on 'Read More' click
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const card = this.closest('.card');
            const moreText = card.querySelector('.more-text');
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                this.textContent = 'Read Less';
            } else {
                moreText.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });

    // Language toggle functionality
    function toggleLanguage() {
        const languageToggle = document.getElementById('language-toggle').checked;
        const elementsToTranslate = document.querySelectorAll('[data-en][data-tr]');
        elementsToTranslate.forEach(element => {
            if (languageToggle) {
                element.textContent = element.getAttribute('data-tr');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });
    }

    // Add event listener to the language toggle
    document.getElementById('language-toggle').addEventListener('change', toggleLanguage);
});
