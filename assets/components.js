// pa-header
class PAHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h2>Philipe Almeida</h2>
        <section class="container">
          <p>
            <span class="descr">Brazilian, based in Portugal</span> <i>🇵🇹</i>
          </p>
        </section>
      </header>
    `;
  }
}
customElements.define('pa-header', PAHeader);

// pa-main-content
class PAMainContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article>
        <section class="container">
          <h1 id="main-content-desktop" class="main-content-desktop">
            Hi. I’m Philipe.<br />
            A software engineer,<br />
            focused in web user interfaces.<br />
            <span class="sn">——</span> currently working at
            <span class="sight"><a href="https://flecto.io">Flecto.</a></span>
          </h1>
          <h1 id="main-content-mobile" class="main-content-mobile">
            Hi. I’m Philipe.<br />
            A software engineer,<br />
            focused in<br />
            web user interfaces.<br />
            <span class="sn">——</span> currently working at
            <span class="sight"><a href="https://flecto.io">Flecto.</a></span>
          </h1>
        </section>
      </article>
    `;
  }
}
customElements.define('pa-main-content', PAMainContent);

// pa-footer
class PAFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <nav class="container">
          <ul>
            <li>
              <a class="in" target="_blank" href="https://linkedin.com/in/almeidaphilipe">linkedin</a>
            </li>
            <li>
              <a class="git" target="_blank" href="https://github.com/philipealmeida">github</a>
            </li>
            <li>
              <a class="mail" target="_blank" href="mailto:devpalmeida@gmail.com">e-mail</a>
            </li>
          </ul>
        </nav>
        <address class="design-author">
          <a target="_blank" href="https://www.linkedin.com/in/joao-paulo-palmieri/">Design by João Palmieri</a>
        </address>
      </footer>
    `;
  }
}
customElements.define('pa-footer', PAFooter);
