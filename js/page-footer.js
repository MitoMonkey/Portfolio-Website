class Footer extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = `<footer class="page-footer">
    <!-- <p class="padding-bottom padding-top" style="margin: 0;">Let's connect!</p> -->
    <h2 class="padding-bottom padding-top" style="margin: 0;">Let's connect!</h2>
    <div class="social-media">
      <a class="circle-link" href="tel:+491631631858" target="_blank" rel="noopener noreferrer">
        <img src="img/Icons/Phone_icon.svg" class="icon" alt="Phone symbol"></a>
      <a class="circle-link" href="mailto:Michael.Flohrschuetz@gmail.com?subject=WebDev%20contact" target="_blank"
        rel="noopener noreferrer">
        <img src="img/Icons/email_icon.svg" class="icon" alt="Email symbol"></a>
      <a class="circle-link" href="https://t.me/MitoFlyingMonkey" target="_blank" rel="noopener noreferrer">
        <img src="img/Icons/Telegram_logo.svg" class="icon" alt="Telegram logo"></a>
      <a class="circle-link" href="https://wa.me/491631631858" target="_blank" rel="noopener noreferrer">
        <img src="img/Icons/Whatsapp_logo.svg" class="icon" alt="Whatsapp logo"></a>
      <!--<a class="circle-link" href="skype:flyingmonkey_6" target="_blank" rel="noopener noreferrer">
        <img src="img/Icons/Skype_logo.svg" class="icon" alt="Skype logo"></a>-->
      <a class="circle-link" href="https://github.com/MitoMonkey" target="_blank" rel="noopener noreferrer">
        <img src="img/Icons/github_logo.svg" class="icon" alt="Github logo"></a>
      <!--<a class="circle-link" href="https://stackoverflow.com/cv/mitothis" target="_blank" rel="noopener noreferrer">
        <img src="img/Icons/stackoverflow_logo.png" class="icon" alt="stackoverflow logo"></a>-->
      <a class="circle-link" href="https://www.linkedin.com/in/michael-flohrschuetz" target="_blank"
        rel="noopener noreferrer"><img src="img/Icons/linkedin_logo.svg" class="icon" alt="LinkedIn logo"></a>
      <!--<a class="circle-link" href="https://www.xing.com/profile/Michael_Flohrschuetz2" target="_blank"
        rel="noopener noreferrer"><img src="img/Icons/Xing_logo.svg" class="icon" alt="Xing logo"></a>-->
      <!--<a class="circle-link" href="https://twitter.com/Mito_this" target="_blank" rel="noopener noreferrer"><img
          src="img/Icons/Twitter_logo.svg" class="icon" alt="Twitter logo"></a>-->
      <!-- <a class="circle-link" href="https://medium.com/@michael.flohrschuetz" target="_blank"
        rel="noopener noreferrer"><img src="img/Icons/Medium_logo.svg" class="icon" alt="Medium logo"></a> -->
    </div>
    <a href="/files/Impressum.pdf" class="impressum" download>Impressum (PDF download)</a>
  </footer>`;
  }
}
// register custom web component
customElements.define('page-footer', Footer);