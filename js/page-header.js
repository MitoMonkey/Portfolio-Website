class PageHeader extends HTMLElement {

    constructor() {
        super();
        this.page = "";
        this.innerHTML = `<header class="page-header">
            <div class="page-header__item">
                <a href="index.html" class="page-header__logo-container"><img src="./img/cell-division.png"
                    class="page-header__logo" alt="Logo, a cell dividing in mitosis"></a>
                <!-- <a href="index.html" class="page-header__heading">Mito.this</a> -->
            </div>
            <nav class="main-navigation page-header__item">
                <ul role="menubar" class="navigation-list circleBehind">
                    <li role="presentation">
                        <!-- prevents screen readers from reading out that its a list -->
                        <a href="index.html" id="index" role="menuitem" class="navigation-list__item">Home</a>
                    </li>
                    <li role="presentation">
                        <a href="index.html#about" id="about" role="menuitem" class="navigation-list__item">About me</a>
                    </li>
                    <li role="presentation">
                        <a href="index.html#skills" id="skills" role="menuitem" class="navigation-list__item">Skills</a>
                    </li>
                    <li role="presentation">
                        <a href="index.html#projects" id="projects" role="menuitem" class="navigation-list__item">Projects</a>
                    </li>
                    <li role="presentation">
                        <a href="contact.html" id="contact" role="menuitem" class="navigation-list__item">Contact</a>
                    </li>
                </ul>
                <!-- hamburger nav for small screens -->
                <div class="hamburger">
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                </div>
            </nav>
        </header>`;
    }

    static observedAttributes = ['page'];

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            this.page = newVal;
        }
    }
    /* adoptedCallback() {
        // Element ist in ein anderes Dokument umgezogen
    } */

    connectedCallback() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation-list');
        const navLinks = document.querySelectorAll(".navigation-list__item");

        let activeElement;
        if (this.page === 'index' && window.location.hash) {
            activeElement = window.location.hash.slice(1);
        } else {
            activeElement = this.page;
        }
        document.getElementById(activeElement).classList.toggle('navigation-list__item--active');

        /* show/hide nav list when user clicks on the hamburger */
        hamburger.addEventListener('click', function (e) {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });

        navLinks.forEach(n => {
            n.addEventListener("click", () => {
                /* close the (responsive) nav menu when a link is clicked */
                hamburger.classList.remove("active");
                nav.classList.remove("active");

                /* reset (=add) underline of all nav items */
                navLinks.forEach(item => {
                    if (item.classList.contains('navigation-list__item--active')) item.classList.remove('navigation-list__item--active');
                });
                /* remove underline of the nav-list-item that is clicked (important for nav links that are just page jumps) */
                n.classList.add('navigation-list__item--active');
            })
        });

        const header = document.querySelector('.page-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > header.offsetHeight) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* disconnectedCallback() {
        // reset (=add) underline of all nav items
        navLinks.forEach(item => {
            if (item.classList.contains('navigation-list__item--active')) item.classList.remove('navigation-list__item--active');
        });
    } */
}
// register <page-header> web component with the PageHeader class
customElements.define('page-header', PageHeader);