class PageHeader extends HTMLElement {

    constructor() {
        super();
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
                        <a href="./index.html" id="nav_index.html" role="menuitem" class="navigation-list__item">Home</a>
                    </li>
                    <li role="presentation">
                        <a href="./index.html#about" id="nav_about" role="menuitem" class="navigation-list__item">About me</a>
                    </li>
                    <li role="presentation">
                        <a href="./index.html#skills" id="nav_skills" role="menuitem" class="navigation-list__item">Skills</a>
                    </li>
                    <li role="presentation">
                        <a href="./index.html#projects" id="nav_projects" role="menuitem" class="navigation-list__item">Projects</a>
                    </li>
                    <li role="presentation">
                        <a href="./contact.html" id="nav_contact.html" role="menuitem" class="navigation-list__item">Contact</a>
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

        // set the correct current navigation-list__item to be active
        if (window.location.hash) {
            let activeSection = document.getElementById('nav_' + window.location.hash.slice(1));
            if (activeSection) {
                activeSection.classList.toggle('navigation-list__item--active');
            }
        } else {
            let activeDocument = document.getElementById('nav_' + window.location.pathname.slice(1));
            if (activeDocument) {
                activeDocument.classList.toggle('navigation-list__item--active');
            }
        }
    }

    connectedCallback() {
        const header = document.querySelector('.page-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > header.offsetHeight) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation-list');
        const navLinks = document.querySelectorAll(".navigation-list__item");

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
                //document.location = n.href;
            })
        });
    }
}
// register <page-header> web component with the PageHeader class
customElements.define('page-header', PageHeader);