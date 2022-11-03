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
                        <a href="index.html" role="menuitem" class="navigation-list__item navigation-list__item--active">Home</a>
                    </li>
                    <li role="presentation">
                        <a href="#about" role="menuitem" class="navigation-list__item">About me</a>
                    </li>
                    <li role="presentation">
                        <a href="#skills" role="menuitem" class="navigation-list__item">Skills</a>
                    </li>
                    <li role="presentation">
                        <a href="#projects" role="menuitem" class="navigation-list__item">Projects</a>
                    </li>
                    <li role="presentation">
                        <a href="contact.html" role="menuitem" class="navigation-list__item">Contact</a>
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
}
// register <page-header> web component with the PageHeader class
customElements.define('page-header', PageHeader);